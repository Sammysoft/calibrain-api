

const express = require('express');
const router = express.Router();
const loginUser= require('../api/auth');
const loginStaff = require('../api/auth');

router.post('/auth/login', loginUser._loginUser);
router.post('/auth/staff', loginStaff._loginStaff);

module.exports = router;