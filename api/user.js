
const Student= require('../models/student-model');
const bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports = {
    _getUser: (req,res,next)=> {
        Student.find()
            .then((result)=>{
                res.json(result)
            })
            .catch(err => res.status(400).json({errors: {global: 'error occured..'}}))
    },

    _postUser: async (req,res,next)=> {
     const { firstname, lastname, email, phonenumber, dateofbirth, category,  gender} = req.body.user;

            if(!firstname || !lastname || !email || !phonenumber || !dateofbirth || !category  || !gender ){
                res.status(400).json({errors : {global: 'Ensure all fields are entered'}})
            }else{
                const user =  new Student( req.body.user )
                user.save()
                console.log(user)
                 res.status(200).json( {user} )
                 .catch(err=> res.status(400).json({errors: {global: 'Couldn \'t resolve'}}))
            }


    },

    _updateUser: async (req,res,next) => {
        if(req.body.password){
            res.status(400).json({errors: {global: 'Sorry you cannot update password'}})
        }
        if(!req.body.password)
           try {
               const updatedUser = await Student.findByIdAndUpdate(req.params.id,
                {$set: req.body},
                {new: true},
                )
                res.status(200).json( updatedUser )
           } catch (error) {
            res.status(500).json(error)
           }
    },

    _deleteUser:  async (req,res,next)=>{
        const userToBeDeleted = await User.findById(req.params.id);

         Student.findByIdAndDelete(req.params.id)
            .then(err => {
                !err
                    res.status(400).json({errors: {global: `You have rusticated ${userToBeDeleted.firstname} ${userToBeDeleted.lastname} from Calibrain!`}})
            })
            .catch(err=>{
                res.status(200).json({errors: {global: 'Unable to delete'}})
            })
    }

}