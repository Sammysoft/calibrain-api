const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sammysoft:sammysoft@sammy-fyvl0.gcp.mongodb.net/MyDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log('Connected to DB....')
        })
        .catch(err => console.log('ERR ', err))