
const Subject = require('../models/subjects.Schema');

module.exports = {
    _addSubject : (req,res,next) => {
        const subject = req.body;

        const newSubject = new Subject(subject);

        newSubject.save()
            .then(()=>{
                res.status(200).json(`You have succesfully added ${newSubject.subjectName}`)
            })
            .catch(err => res.status(400).json('Could not add subject '))
    },
    _getSubject: (req,res,next) => {
        Subject.find()
            .then(response => res.json(response))
            .catch(err=> res.json(err))
    },
    _getASubject: async (req,res,next) => {
            const sub = await Subject.find({subjectName: req.body.subtype});
            try{
                if(sub){
               res.status(200).json( sub )
                }else{
                 res.status(400).json('Subject entered has not been created')
                }
            }catch(error){
                res.status(400).json(error)
            }
    },
    _addStdSub: (req,res,next) => {
        Subject.findById(req.params.id, function(err, result){
            const document = req.body;
           result.student.push(document);
           result.save()
           res.json(`You have enrolled a new student for ${result.subjectName}`)
        })
    },

    _addStdScore: (req,res,next) => {
          Subject.findById(req.params.id)
            .then(response => res.json(response))
            .catch(err => res.json(err))
    },

}