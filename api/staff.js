const { json } = require('body-parser');
const Staff = require('../models/staff-model');
const bcrypt = require('bcrypt')


module.exports = {
    _addStaff: async (req,res,next)=> {
        const { username, password, email, firstname, lastname, teaches, phonenumber, usertype, imageurl } = req.body.user;
        if(!username ||  !password || !email || !firstname || !lastname || !phonenumber || !usertype || !imageurl ){
            res.status(400).json({errors: {global: "Ensure all fields are entered"}})
        }else{

            const user = await new Staff(req.body.user)
            try{
            bcrypt.genSalt(10, (err, salt)=>{
                !err
                bcrypt.hash(user.password, salt, async (err, hash)=>{
                    !err
                        user.password = hash;
                        const newUser = await user.save()
                        res.status(200).json( {newUser} )
                })
            })
            }catch(err){
                    res.status(400).json({errors: {global: "Could not add a new user "}})
            }

        }

       },
    _removeStaff: async (req,res,next) =>{
        const toBeDeleted = await Staff.findOne({_id: req.params.id})
        try {
            await  Staff.findByIdAndDelete(req.params.id)
            res.status(200).json(`${toBeDeleted.firstname} can no longer use Calibrain`)
        } catch (error) {
            res.status(400).json({errors: {global:`Unable to delete ${toBeDeleted.firstname}`}})
        }
        },


        _getAllStaffs : async(req,res,next) => {
          try {
            const allStaffs = await Staff.find();
            res.status(200).json({allStaffs})
          } catch (error) {
                res.status(400).json({errors: {global:'Unable to get all staffs'}})
          }

        },

        _getAStaff: async (req,res,next) => {
            try {
                const oneStaff = await Staff.findById(req.params.id);
                res.status(200).json( {oneStaff} )
            } catch (error) {
                res.status(400).json({errors: {global:'Could not get staff'}})
            }
        }
}