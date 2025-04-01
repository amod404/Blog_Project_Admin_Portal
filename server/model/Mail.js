const mongoose = require("mongoose")

const mailSchema = new mongoose.Schema({
    mail: {
        type:String,
        required: true,
    }
});

module.exports = mongoose.model("Mail", mailSchema)
