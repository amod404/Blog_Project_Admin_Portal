const express = require("express")
const app = express();
require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`App is listening at ${PORT}`)
})

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your server is up and running...",
    })
})