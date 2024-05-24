const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Candidate = require('../models/Candidate');

router.post('/', authMiddleware, async (req, res) => {
    const { first_name, last_name, email } = req.body;
    try {
        const newCandidate = new Candidate({ first_name, last_name, email, user_id: req.user });
        await newCandidate.save();
        res.status(201).send('Candidate added');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

router.get('/', authMiddleware, async (req, res) => {
    try {
        const candidates = await Candidate.find({ user_id: req.user });
        res.json(candidates);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
