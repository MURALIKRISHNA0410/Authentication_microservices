const express = require('express');
const router = express.Router();
const {profile}=require('../controllers/profile');
const {candidate}=require('../controllers/candidate');

router.post('/profile',profile);
router.get('/candidate',candidate);