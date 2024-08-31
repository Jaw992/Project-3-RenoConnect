const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyTokenContractor");
const Contractor = require("../models/Contractor");


const SALT_LENGTH = 12;

const createJWT = (contractor) => {
    const payload = { username: contractor.username, _id: contractor._id };
    const secret = process.env.JWT_SECRET;
    const options = { expiresIn: "100y" };
    return jwt.sign(payload, secret, options);
  };

//* Contractor sign up route
router.post("/signup", async (req, res) => {
    const { username, name, contact, email, company, companyUEN } = req.body;
    try {
        const contractorInDatabase = await Contractor.findOne({username});
        if (contractorInDatabase) {
            return res.status(400).json({ error: "Username Taken."});
        }

        const hashedPassword = await bcrypt.hash(req.body.password, SALT_LENGTH);
        const contractorUser = await Contractor.create({ username, hashedPassword, name, contact, email, company, companyUEN});
        const token = createJWT(contractorUser);
        res.status(201).json({contractorUser, token});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const contractorUser = await Contractor.findOne({ username });
        if (!contractorUser) {
            return res.status(401).json({ error: "No such User"});
        }

        const match = await bcrypt.compare(password, contractorUser.hashedPassword);
        if (match) {
            const token = createJWT(contractorUser);
            return res.status(200).json({ token });
        }
        res.status(401).json({ error: "Wrong Password!"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;