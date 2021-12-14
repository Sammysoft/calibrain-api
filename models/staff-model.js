const mongoose = require('mongoose');
const staffSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username:{type: String},
    phonenumber:{type: Number}, email:{type: String},password: {type: String},
    teaches:[String], usertype:{type: String},  isAdmin: {
        type: Boolean,
        default: false
    }, imageurl:{type: String}
},{timestamps: true});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;