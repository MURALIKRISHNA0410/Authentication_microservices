const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth');
const authMiddleware = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);

//privateroute
//authnetication required with respective to jwt token which is done middleware authMiddleWare
router.post('/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});

module.exports = router;