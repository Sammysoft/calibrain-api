
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    test1:{ type: Number}, test2:{type: Number}, exams:{type: Number}
})
const registeredStudents= new mongoose.Schema({
    std_id:{  type:String },  scores:scoreSchema
})

const subjectSchema = new mongoose.Schema({
    subjectName:{
        type: String
    },
    student:[registeredStudents]
})

const Subjects = mongoose.model('Subject', subjectSchema )
module.exports = Subjects;