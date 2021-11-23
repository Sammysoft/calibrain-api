const express = require('express')
const router = express.Router();
const postUser = require('../api/user');
const getUser = require('../api/user');
const updateUser = require('../api/user');
const deleteUser = require('../api/user')

const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('../middleware/verifyToken')


router.post('/postUser', verifyTokenAndAdmin, postUser._postUser);
router.get('/getUser', getUser._getUser);
router.post('/updateUser/:id', verifyTokenAndAuth, updateUser._updateUser);
router.post('/deleteUser/:id', verifyTokenAndAdmin, deleteUser._deleteUser);


module.exports = router;
