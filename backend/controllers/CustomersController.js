const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Customer = require("../models/Customer");
const jwt = require("jsonwebtoken");

const SALT_LENGTH = 12;

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

module.exports = router;
