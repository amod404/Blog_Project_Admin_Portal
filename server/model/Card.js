const mongoose = require("mongoose");

//Define the Tags schema
const cardSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    thumbnail:{
        type:String,
    },
    timeToRead:{
        type:String,
    },
    tags: {
        type: [String],
        default:[]
    },
    series: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "Series",
    },
    date: {
        type:Date,
        required:true,
        default:Date.now
    },
    content:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Card", cardSchema);