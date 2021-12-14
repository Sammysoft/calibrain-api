const express = require('express')
const router = express.Router();
const postUser = require('../api/user');
const getUser = require('../api/user');
const updateUser = require('../api/user');
const deleteUser = require('../api/user')

const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('../middleware/verifyToken')


router.post('/postUser', postUser._postUser);
router.get('/getUser1', getUser._getUser1);
router.get('/getUser2', getUser._getUser2);
router.get('/getUser3', getUser._getUser3);
router.get('/getUser4', getUser._getUser4);
router.get('/getUser5', getUser._getUser5);
router.get('/getUser6', getUser._getUser6);
router.post('/updateUser/:id', verifyTokenAndAuth, updateUser._updateUser);
router.post('/deleteUser/:id', verifyTokenAndAdmin, deleteUser._deleteUser);


module.exports = router;
