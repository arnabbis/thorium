const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    userName: String,
    balance:Number,
    adress: String,
    age:Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }

});

module.exports = mongoose.model('User', userSchema) //users

