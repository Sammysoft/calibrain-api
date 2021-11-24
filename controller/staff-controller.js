const express = require('express');
const router = express.Router();
const addStaff = require('../api/staff');
const removeStaff = require('../api/staff');
const getAllStaffs = require('../api/staff');
const getAStaff = require('../api/staff');
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('../middleware/verifyToken')

router.post('/addStaff',  addStaff._addStaff);
router.post('/removeStaff/:id', verifyTokenAndAuth, verifyTokenAndAdmin, removeStaff._removeStaff);
router.get('/getAllStaffs',  getAllStaffs._getAllStaffs);
router.post('/getAStaff/:id', verifyTokenAndAuth, getAStaff._getAStaff)

module.exports = router;