const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
const server = express();
// require('dotenv').config();
// const userAPI = require('./controller/user.controller')
// const staffAPI = require('./controller/staff-controller')
// const subjectAPI = require('./controller/subjects-controller')
// const authAPI = require('./controller/auth-controller');
// require('./api/db')
// let Mongo = process.env.MongoURI
// server.use(express.json());
const port = process.env.PORT || 5056;
server.listen(port, ()=>{
    console.log(`Server connected on port ${port}` );
})

// server.use(bodyParser.json())
// server.use(bodyParser.urlencoded({extended: true}))
// server.use(cors());
server.get('/', (req,res,next)=>{
    res.status(200).json('Welcome To Calibrain RESTful API service...')
});
// server.use('/api', userAPI)
// server.use('/api', staffAPI)
// server.use('/api', subjectAPI)
// server.use('/api', authAPI)