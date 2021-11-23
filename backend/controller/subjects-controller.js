const express = require('express');
const router = express.Router();
const  addSubject = require('../api/subject');
const  getSubject = require('../api/subject');
const  addStdSub = require('../api/subject');
const  addStdScore = require('../api/subject');
const getASubject = require('../api/subject');
const { verifyTokenAndAdmin, verifyTokenAndAuth } = require('../middleware/verifyToken')

router.post('/addSubject', verifyTokenAndAuth, verifyTokenAndAuth, addSubject._addSubject);
router.get('/getSubject', getSubject._getSubject);
router.post('/addstdsub/:id', verifyTokenAndAuth,addStdSub._addStdSub);
router.post('/addStdScore/:id', verifyTokenAndAuth,addStdScore._addStdScore);
router.post('/getASubject', verifyTokenAndAuth, getASubject._getASubject)

module.exports = router;
