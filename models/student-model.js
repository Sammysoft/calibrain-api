const mongoose= require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    email:{type: String},
    phonenumber: {type: String},
    dateofbirth:{type: String},
    post:{type: String},
    address:{type: String},
    category:{type: String}, house:{type: String},
    imageuri:{type: String}, gender:{type: String},
    subjects:[String]
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;