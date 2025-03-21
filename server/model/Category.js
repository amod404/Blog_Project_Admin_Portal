const mongoose = require("mongoose");

// Define the Tags schema
const seriesSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
    logo:{
        type:String,
        required:true,
    },
	cards: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Card",
		},
	],
});

// Export the Tags model
module.exports = mongoose.model("Series", seriesSchema);
