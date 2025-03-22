const Series = require("../model/Series")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
require("dotenv").config();

exports.createSeries = async (req,res) => {
    try{
        let {
            name
        } = req.body
        const logo = req.files.logo
        
        if(!logo || !name){
            return res.status(403).json({
                success:false,
                message:"all feilds are mandatory"
            })
        }
        
        name = name.trim().replace(/\s+/g, "-").toLowerCase()

        const existingSeries = await Series.findOne({name:name});
        if(existingSeries){
            return res.status(404).json({
                success:false,
                message:"series already exists",
            })
        }

        const logoImage = await uploadImageToCloudinary(logo,process.env.FOLDER_NAME)
        const newSeries = await Series.create({
            name,
            logo:logoImage.secure_url,
            cards:[]
        })

        return res.status(200).json({
            success:true,
            message:"series created successfully",
            data:newSeries
        })


    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Falied to create series",
            error:err.message
        })
    }
}