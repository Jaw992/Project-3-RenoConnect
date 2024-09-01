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
        // req.body.customer = req.customer._id;
        const project = await Project.create(req.body);
        res.status(201).json({project});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//* Get a single project
router.get("/:projectId", async (req, res) => {
    try {
        const projectConractor = await Project.findById(req.params.projectId).populate("Contractor");
        res.status(200).json({projectConractor});
        const projectCustomer = await Project.findById(req.params.projectId).populate("Customer");
        res.status(200).json({projectCustomer});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;