const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/development', {useNewUrlParser: true}, (err) =>{
    if(!err){
        console.log('Mongo DB Connection established!');
    }
    else{
        console.log('Error in DB Connection: '+err)
    }
});

require('./Employee');