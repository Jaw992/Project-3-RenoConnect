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
// router.post("/signup", async (req, res) => {
//     try {
//         // check if there is project ref Id entered
//         const { project } = req.body;
//         if (!project) {
//             return res.status(400).json({error: "No Project Id, please enter."});
//         }

//         // check if project ref Id entered matches any created Project ref Id
//         const projectExists = await Project.exists({_id: req.body.project});
//         if (!projectExists) {
//             return res.status(400).json({error: "Invalid Project Id."});
//         }
//         // check if username is taken
//         const customerInDatabase = await Customer.findOne({ username: req.body.username });
//         if (customerInDatabase) {
//             return res.json({error: "Username is taken."});
//         }
//         // create new user with hashed password
//         const customer = await Customer.create({
//             username: req.body.username,
//             hashedPassword: bcrypt.hashSync(req.body.password, SALT_LENGTH),
//             name: req.body.name,
//             contact: req.body.contact,
//             email: req.body.email,
//             project: req.body.project,
//         })
//         const token = jwt.sign({ username: customer.username, _id: customer._id }, process.env.JWT_SECRET);
//         res.status(201).json({ customer, token });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

router.post("/signup", async (req, res) => {
    // check if there is project ref Id entered
    const { username, hashedPassword, name, contact, email, projectId } =
      req.body;
    const project = await Project.findOne({ projectId });
    if (!project) {
      return res.status(400).json({ error: "No Project Id, please enter." });
    }

    // check if project ref Id entered matches any created Project ref Id
    const newCustomer = new Customer({
      username,
      hashedPassword,
      name,
      contact,
      email,
      projectId, // Link customer to the project by business ID
    });
    // create new user with hashed password
    try {
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
        const token = jwt.sign(
            { username: Customer.username, _id: Customer._id },
            process.env.JWT_SECRET,
          );
          res.status(201).json({ Customer, token });
      
    } catch (error) {
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