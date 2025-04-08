// const mongoose = require("mongoose");
// require("dotenv").config();

// const { MONGODB_URL } = process.env;

// exports.connectDB = () => {
// 	mongoose
// 		.connect(MONGODB_URL)
// 		.then(() => console.log(`DB Connection Success`))
// 		.catch((err) => {
// 			console.log(`DB Connection Failed`);
// 			console.log(err);
// 			process.exit(1);
// 		});
// };

const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};
