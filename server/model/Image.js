const mongoose = require("mongoose");

// Define the Tags schema
const imageSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
});

// Export the Tags model
module.exports = mongoose.model("Image", imageSchema);
