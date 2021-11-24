
const User = require('../models/student-model');
const bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports = {
    _getUser: (req,res,next)=> {
        User.find()
            .then((result)=>{
                res.status(200).json({result})
            })
            .catch(err => res.status(400).json({errors: {global: 'Error occured'}}))
    },

    _postUser: async (req,res,next)=> {
     const { firstname, lastname, email, phonenumber, dateofbirth, category, house, post,  gender} = req.body.user;
        try{
            if(!firstname || !lastname || !email || !phonenumber || !dateofbirth || !category  || !gender ){
                res.status(400).json({errors: {global: "Ensure all fields are entered"}})
            }else{
                const user = await new User( req.body.user )
                user.save()
                res.status(200).json({user})
                .catch(err=> {
                    res.status(400).json({errors: {global: "Could not Register User"}})
                })
            }
        }catch(error){
            res.status(400).json({errors: {global: 'Could not register'}})
        }

    },

    _updateUser: async (req,res,next) => {
        if(req.body.password){
            res.status(400).json({errors: {global: 'Sorry you cannot update password'}})
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
                    res.status(400).json({errors: {global: `You have rusticated ${userToBeDeleted.firstname} ${userToBeDeleted.lastname} from Calibrain!`}})
            })
            .catch(err=>{
                res.status(200).json({errors: {global: 'Unable to delete'}})
            })
    }

}