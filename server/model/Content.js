const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    data:{
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("Content", contentSchema);