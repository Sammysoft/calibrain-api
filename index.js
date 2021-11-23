const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const userAPI = require('./controller/user.controller')
const staffAPI = require('./controller/staff-controller')
const subjectAPI = require('./controller/subjects-controller')
const authAPI = require('./controller/auth-controller');
require('./api/db');
app.use(express.json());
const port = process.env.PORT || 5056;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.get('/', (req,res,next)=>{
    res.status(200).json('Welcome To Calibrain RESTful API service...')
});
app.use('/api', userAPI)
app.use('/api', staffAPI)
app.use('/api', subjectAPI)
app.use('/api', authAPI)


app.listen(port, ()=>{
    console.log(`app connected on port ${port}` );
})