const express = require("express")
const cors = require("cors")
const fileUpload = require("express-fileupload")
const {connectDB} = require("./config/database")
const {cloudinaryConnect} = require("./config/cloudinary")
const routes = require("./routes/routes")
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
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

