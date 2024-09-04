const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const debug = require("debug")("hoot:controllers:ProjectsController");
const verifyTokenContractor = require("../middleware/verifyTokenContractor");
const verifyTokenCustomer = require("../middleware/verifyTokenCustomer");

//* Verify Token
router.use(verifyTokenContractor);
router.use(verifyTokenCustomer);

//* Create new project
router.post("/", async (req, res) => {
    try {
        const { projectId } = req.body;
        if (!projectId) {
            return res.status(400).json({error: "projectId is required."});
        }

        const existingProject = await Project.findOne({ projectId });
        if (existingProject) {
            return res.status(400).json({ error: "Project number used." });
        }

        // if (Project.length > 1) {
        //     return res.status(400).json({ error: "Only one project at a time." });
        // }

        req.body.contractor = req.contractor._id;
        const project = await Project.create(req.body);
        debug(project);
        res.status(201).json({project});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//* Get All Projects
router.get("/", async (req, res) => {
    try {
        const project = await Project.find({}).populate("contractor");
        res.json(projects);
        if (project.length === 0) {
            return res.status(404).json({ error: "No projects" });
          }
          res.status(200).json({project});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//* Get a single project
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

router.put("/:projectId", async (req, res) => {
    const { projectId } = req.params;
    try{
        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            req.body,
            { new: true },
        );

        if (!updatedProject) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;


