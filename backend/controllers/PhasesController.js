const express = require("express");
const router = express.Router();
const Phase = require("../models/Phase");
const Project = require("../models/Project");
const verifyTokenContractor = require("../middleware/verifyTokenContractor");

//* Verify Token
router.use(verifyTokenContractor);
/* 
Create a new phase: "/"
Get a single phase by ID: "/:phaseId"
Update a phase and add a change log entry: "/update/:phaseId"
Approve a phase: "/approve/:phaseId"
Reject a phase: "/reject/:phaseId"
Delete a phase: "/:phaseId"
*/

// Create a new phase
router.post("/", async (req, res) => {
  try {
    const { project, phaseName } = req.body;

    if (!project) {
      return res.status(400).json({ error: 'Project ID is required.' });
    }

    const projectExists = await Project.exists({ _id: req.body.project });
    if (!projectExists) {
      return res.status(400).json({error: "Invalid Project Id."});
    }

    // Validate phaseName format
    const phaseNameRegex = /^Phase \d+$/;
    if (!phaseNameRegex.test(phaseName)) {
      return res.status(400).json({ error: 'Please input phaseName as e.g Phase 1' });
    }

    // Check if a phase with the same phaseName already exists for the project
    const phaseExists = await Phase.findOne({ phaseName, project });
    if (phaseExists) {
      return res.status(400).json({ error: 'Phase with the same name already exists for this project.' });
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
      oldCost: phase.cost,
      newCost: req.body.cost || phase.cost,
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
      return res.status(400).json({ message: 'phaseId is required' });
    }

    // Find the phase document by phaseId
    const phase = await Phase.findById(phaseId);

    if (!phase) {
      return res.status(404).json({ message: 'Phase not found' });
    }

    // Ensure changeLogs array is not empty
    if (phase.changeLog.length === 0) {
      return res.status(404).json({ message: 'No change logs recorded' });
    }

    const latestChangeLog = phase.changeLog[phase.changeLog.length - 1];
    res.json(latestChangeLog);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
