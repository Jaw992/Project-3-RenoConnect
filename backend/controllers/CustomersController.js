const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Customer = require("../models/Customer");
const jwt = require("jsonwebtoken");
const verifyTokenCustomer = require("../middleware/verifyTokenCustomer");
const Project = require("../models/Project");
const Phase = require("../models/Phase");

const SALT_LENGTH = 12;

// sign up
router.post("/signup", async (req, res) => {
    const { username, password, name, contact, email, projectId } = req.body;
  
    try {
      // Find the project by business projectId
      const project = await Project.findOne({ projectId });
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
  
      // Hash the password
      const hashedPassword = bcrypt.hashSync(password, SALT_LENGTH);
  
      // Create a new customer and link to the project
      const customer = await Customer.create({
        username,
        hashedPassword,
        name,
        contact,
        email,
        projectId,
      });
  
      // Generate JWT token
      const token = jwt.sign(
        { username: customer.username, _id: customer._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" } // Token expiration time
      );
  
      // Respond with the customer data and token
      res.status(201).json({
        customer,
        token,
      });
    } catch (error) {
      console.error("Error creating customer:", error);
      res.status(400).json({ error: "Error creating customer" });
    }
  });
  
// log in
router.post("/login", async (req, res) => {
  try {
    const customer = await Customer.findOne({ username: req.body.username });
    if (
      customer &&
      bcrypt.compareSync(req.body.password, customer.hashedPassword)
    ) {
      const token = jwt.sign(
        { username: customer.username, _id: customer._id },
        process.env.JWT_SECRET,
      );
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: "Invalid username or password." });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// get customer profile with project and phases
router.get("/:customerId", verifyTokenCustomer, async (req, res) => {
    try {
        const { customerId } = req.params;
        if (!customerId) {
            return res.status(401).json({ error: "Unauthorized" })
        }
        const customer = await Customer.findById(customerId);
        if (!customer) {
            res.status(404).json({ error: "Profile not found."});
        }
        const project = await Project.findOne({projectId: customer.projectId});
        const phases = await Phase.find({ project: project._id});
        res.json({ project, phases });
    } catch (error) {
        if (res.statusCode === 404) {
            res.status(404).json({ error: error.message });
        } else {
        res.status(500).json({ error: error.message });
        }
    }
});

module.exports = router;


// req.customer._id !== req.params.customerId