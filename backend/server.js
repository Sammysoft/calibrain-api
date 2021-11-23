const express = require('express');
const  mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();
require('dotenv').config();
const userAPI = require('./controller/user.controller')
const staffAPI = require('./controller/staff-controller')
const subjectAPI = require('./controller/subjects-controller')
const authAPI = require('./controller/auth-controller');

let Mongo = process.env.MongoURI
server.use(express.json());
const port = process.env.PORT || 5055;
server.listen(port, ()=>{
    console.log(`Server connected on port ${port}` );

    mongoose.connect(Mongo, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log('Connected to DB....')
        })
        .catch(err => console.log('ERR ', err))
})

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(cors());
server.use('/api', userAPI)
server.use('/api', staffAPI)
server.use('/api', subjectAPI)
server.use('/api', authAPI)