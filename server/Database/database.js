const mongoose = require('mongoose')

const connectToMongoose = () => {
    mongoose.connect(`${process.env.mongo_uri}`)
    console.log("Database connected")
}


module.exports = connectToMongoose;
