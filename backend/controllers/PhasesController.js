const express = require("express");
const router = express.Router();
const Phase = require("../models/Phase");
const verifyTokenContractor = require("../middleware/verifyTokenContractor");

//* Verify Token
router.use(verifyTokenContractor);
/* 
Create a new phase: "/"
Get all phases: "/"
Get a single phase by ID: "/:phaseId"
Update a phase and add a change log entry: "/update/:phaseId"
Approve a phase: "/approve/:phaseId"
Reject a phase: "/reject/:phaseId"
Delete a phase: "/delete/:phaseId"
Get all phases: "/"
Get changelog Id: "/:phaseId/ChangeLog"
*/

// Create a new phase
router.post("/", async (req, res) => {
  try {
    if (!req.body.project) {
      return res.status(400).json({ error: "Project ID is required." });
    }
    const newPhase = await Phase.create(req.body);
    res.status(201).json(newPhase);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get a single phase by ID
router.get("/:phaseId", async (req, res) => {
  try {
    const phase = await Phase.findById(req.params.phaseId).populate("project");
    if (!phase) {
      return res.status(404).json({ message: "Phase not found" });
    }
    res.status(200).json(phase);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all phases
router.get("/", async (req, res) => {
  try {
    const phases = await Phase.find().populate("project");
    res.status(200).json(phases);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a phase and add a change log entry
router.put("/update/:phaseId", async (req, res) => {
  try {
    const phase = await Phase.findById(req.params.phaseId);
    if (!phase) {
      return res.status(404).json({ message: "Phase not found" });
    }

    // Create a change log entry
    const changeLogEntry = {
      oldTaskDescription: phase.taskDescription,
      newTaskDescription: req.body.taskDescription || phase.taskDescription,
      oldStartDate: phase.startDate,
      newStartDate: req.body.startDate || phase.startDate,
      oldEndDate: phase.endDate,
      newEndDate: req.body.endDate || phase.endDate,
      createOn: new Date(),
      reviewStatus: "Pending",
    };

    // Update the phase and add the change log entry
    phase.changeLog.push(changeLogEntry);
    Object.assign(phase, req.body);
    const updatedPhase = await phase.save();

    res.status(200).json(updatedPhase);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Approve a phase
router.put("/:phaseId/approve", async (req, res) => {
  try {
    const phase = await Phase.findById(req.params.phaseId);
    if (!phase) {
      return res.status(404).json({ message: "Phase not found" });
    }

    // Find the latest change log entry and update its review status
    const latestChangeLog = phase.changeLog[phase.changeLog.length - 1];
    if (latestChangeLog) {
      latestChangeLog.reviewStatus = "Approved";
    }

    // Save the updated phase
    const approvedPhase = await phase.save();

    res.status(200).json(approvedPhase);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Reject a phase
router.put("/:phaseId/reject", async (req, res) => {
  try {
    const phase = await Phase.findById(req.params.phaseId);
    if (!phase) {
      return res.status(404).json({ message: "Phase not found" });
    }

    // Find the latest change log entry and update its review status
    const latestChangeLog = phase.changeLog[phase.changeLog.length - 1];
    if (latestChangeLog) {
      latestChangeLog.reviewStatus = "Rejected";
    }

    // Save the updated phase
    const rejectedPhase = await phase.save();

    res.status(200).json(rejectedPhase);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a phase
router.delete("/delete/:phaseId", async (req, res) => {
  try {
    const phase = await Phase.findByIdAndDelete(req.params.phaseId);
    if (!phase) {
      return res.status(404).json({ message: "Phase not found" });
    }
    res.status(200).json({ message: "Phase deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get changelog Id
router.get("/:phaseId/ChangeLog", async (req, res) => {
  try {
    const { phaseId } = req.params;

    // Validate the phaseId parameter
    if (!phaseId) {
      return res.status(400).json({ message: "phaseId is required" });
    }

    // Find the phase document by phaseId
    const phase = await Phase.findById(phaseId);

    if (!phase) {
      return res.status(404).json({ message: "Phase not found" });
    }

    // Ensure changeLogs array is not empty
    if (phase.changeLog.length === 0) {
      return res.status(404).json({ message: "No change logs recorded" });
    }

    const latestChangeLog = phase.changeLog[phase.changeLog.length - 1];
    res.json(latestChangeLog);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
