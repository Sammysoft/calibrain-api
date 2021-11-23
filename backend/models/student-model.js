const mongoose= require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email:{type: String, required: true},
    phonenumber: {type: String, required: true},
    dateofbirth:{type: String, required: true},
    post:{type: String, default: 'Student'},
    category:{type: String, required: true}, house:{type: String, required: true},
    subjects:[String]
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;