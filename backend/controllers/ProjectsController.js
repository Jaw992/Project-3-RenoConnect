const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const verifyTokenContractor = require("../middleware/verifyTokenContractor");
const verifyTokenCustomer = require("../middleware/verifyTokenCustomer");

//* Verify Token
router.use(verifyTokenContractor);
router.use(verifyTokenCustomer);

//* Create new project
router.post("/", async (req, res) => {
    try {
        req.body.contractor = req.contractor._id;
        const project = await Project.create(req.body);
        res.status(201).json({project});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// //* Get a single project on contractor and customer respectively
router.get("/:projectId", async (req, res) => {
    const { projectId } = req.params;

    try {
        const project = await Project.findById(projectId).populate("contractor");
        if (project === null) {
            return res.status(404).json({ error: "Not found" });
          }
          res.status(200).json({project});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;