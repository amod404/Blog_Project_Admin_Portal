const express = require("express")
const cors = require("cors")
const fileUpload = require("express-fileupload")
const {connectDB} = require("./config/database")
const {cloudinaryConnect} = require("./config/cloudinary")
const routes = require("./routes/routes")
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

// app.use(cors({
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true // If you're sending cookies or authentication headers
// }));

const allowedOrigins = [
    "http://localhost:3000",  // Local frontend
    "http://localhost:3001"  // Local frontend
    // "https://your-frontend.vercel.app" // Deployed frontend (replace with your actual URL)
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error("Blocked by CORS:", origin);
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);
app.use(express.json());
app.use("/api/v1",routes)


cloudinaryConnect();
connectDB();

app.listen(PORT,() => {
    console.log(`App is listening at ${PORT}`)
})

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your server is up and running...",
    })
})

