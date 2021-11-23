
const User = require('../models/student-model');
const bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports = {
    _getUser: (req,res,next)=> {
        User.find()
            .then((result)=>{
                res.json(result)
            })
            .catch(err => res.status(400).json('error occured..'))
    },

    _postUser: async (req,res,next)=> {
     const { firstname, lastname, email, phonenumber, dateofbirth, category, house, subjects } = req.body;
        try{
            if(!firstname || !lastname || !email || !phonenumber || !dateofbirth || !category || !house || !subjects ){
                res.status(400).json('Ensure all fields are entered')
            }else{
                const user = await new User( req.body )
                user.save()
                res.status(200).json( user )
            }
        }catch(error){
            res.status(400).json('Could not add ')
        }

    },

    _updateUser: async (req,res,next) => {
        if(req.body.password){
            res.status(400).json('Sorry you cannot update password')
        }
        if(!req.body.password)
           try {
               const updatedUser = await User.findByIdAndUpdate(req.params.id,
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

         User.findByIdAndDelete(req.params.id)
            .then(err => {
                !err
                    res.status(400).json(`You have rusticated ${userToBeDeleted.firstname} ${userToBeDeleted.lastname} from Calibrain!`)
            })
            .catch(err=>{
                res.status(200).json('Unable to delete')
            })
    }

}