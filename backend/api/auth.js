
const bcrypt = require('bcryptjs');
const User = require('../models/simpleUser');
const Staff = require('../models/staff-model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
     _loginUser: async (req,res,next)=> {
          const { username,password } = req.body;
          console.log(username)
          const user = await User.findOne({username: username})
          if(!user){
               res.status(400).json('Wrong Credentials')
          }else{
          user
               try {
                    bcrypt.compare( password, user.password, (err, isMatch)=>{
                        if(isMatch){
                             const accesstoken = jwt.sign(
                                  {
                                       id: user._id,
                                       isAdmin: user.isAdmin
                                  }, process.env.TOKEN_KEY, { expiresIn: "1h" }
                             )
                             const { password, ...others } = user._doc
                            res.status(200).json( {...others, accesstoken} )
                        }else{
                            res.status(400).json('Wrong password')
                        }
                    })

               } catch (error) {
                    res.status(400).json( error)
               }
           }
       },
       _loginStaff : async (req,res,next)=> {
          const { email,password } = req.body.credentials;
          let user = await Staff.findOne({email: email})

          if(!user){

               res.status(400).json({errors: {global: 'Wrong Email'}})
          }else{
          user
               try {
                    bcrypt.compare( password, user.password, (err, isMatch)=>{
                        if(isMatch){
                             const accesstoken = jwt.sign(
                                  {
                                       id: user._id,
                                       isAdmin: user.isAdmin
                                  }, process.env.TOKEN_KEY, { expiresIn: "1h" }
                             )
                             const { password, ...others } = user._doc
                              user = {...others, accesstoken}
                        return    res.status(200).json( {user} )
                        }else{
                          return  res.status(400).json({errors: {global: 'Wrong Password'}})
                        }
                    })

               } catch (error) {
                   return res.status(400).json( error)
               }
           }
       }
}