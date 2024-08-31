const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Customer = require("../models/Customer");
const jwt = require("jsonwebtoken");
const verifyTokenCustomer = require('../middleware/verifyTokenCustomer');
const ChangeLog = require("../models/Phase");

const SALT_LENGTH = 12;

// sign up
router.post("/signup", async (req, res) => {
    try {
        // check if username is taken
        const customerInDatabase = await Customer.findOne({ username: req.body.username });
        if (customerInDatabase) {
            return res.json({error: "Username is taken."});
        }
        // create new user with hashed password
        const customer = await Customer.create({
            username: req.body.username,
            hashedPassword: bcrypt.hashSync(req.body.password, SALT_LENGTH)
        })
        const token = jwt.sign({ username: customer.username, _id: customer._id }, process.env.JWT_SECRET);
        res.status(201).json({ customer, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// log in
router.post("/login", async (req, res) => {
    try {
        const customer = await Customer.findOne({ username: req.body.username });
        if (customer && bcrypt.compareSync(req.body.password, customer.hashedPassword)) {
            const token = jwt.sign({ username: customer.username, _id: customer._id }, process.env.JWT_SECRET);
            res.status(200).json({ token });
        } else {
            res.status(401).json({ error: "Invalid username or password."});
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// get customer profile
router.get("/:customerId", verifyTokenCustomer, async (req, res) => {
    try {
        if (req.customer._id !== req.params.customerId) {
            return res.status(401).json({ error: "Unauthorized" })
        }
        const customer = await Customer.findById(req.customer._id);
        if (!customer) {
            res.status(404)
            throw new Error("Profile not found.");
        }
        res.json({ customer });
    } catch (error) {
        if (res.statusCode === 404) {
            res.status(404).json({ error: error.message });
        } else {
        res.status(500).json({ error: error.message });
        }
    }
});

module.exports = router;
