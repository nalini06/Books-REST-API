const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, "Must provide name"],
        trim:true
    },
    description:{
        type: String,
        required: [true, "Must provide description"],
        trim : true
    }
})

module.exports = mongoose.model('Book', BookSchema)