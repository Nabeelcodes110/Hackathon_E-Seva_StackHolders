const mongoose = require('mongoose')


const donationSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    book :{
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    }
})

const donationModel =  mongoose.model('donations' , donationSchema)
module.exports = donationModel