const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    profile : {
        type : String,
        required : true

    },
    contact : {
        type : String,
        unique : true,
        required : true
    },
    dob : {
        type : Date,
        required : true
    }
})

const User =  mongoose.model('user' , userSchema)
module.exports = User