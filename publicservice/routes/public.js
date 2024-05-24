const express = require('express');
const router = express.Router();
const apiKeyMiddleware = require('../middleware/apiKey');
const User = require('../models/User');
const Candidate = require('../models/Candidate');

router.use(apiKeyMiddleware);

router.get('/profile', async (req, res) => {
    try {
        let userid=req.params.user_id;
        const user = await User.findOne({user_id: req.user});
        if (!user) return res.status(404).send('User not found');
        res.json({
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        });
    } catch (error) {
        res.status(500).send('Server error');
    }
});

router.get('/candidate', async (req, res) => {
    try {
        const candidates = await Candidate.find({ user_id: req.user });
        res.json(candidates);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;