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

exports.getSeries = async (req, res) => {
    try{
        const series = await Series.find({});
        if(!series){
            return res.status(505).json({
                success:false,
                message:"No series found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"series fetched successfully",
            data:series
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Falied to get series",
            error:err.message
        })
    }
} 

exports.getSeriesById = async (req,res) => {
    try{
        const { series } = req.body;
        
        if(!series){
            return res.status(404).json({
                success:false,
                message:"Series is required",
                error:err.message
            })
        }
        
        const data = await Series.findOne({name:series}).populate("cards");
        
        if(!data){
            return res.status(404).json({
                success:false,
                message:"Series not found",
                error:err.message
            })
        }

        return res.status(200).json({
            success:true,
            message:"Data of series extracted successfully",
            data:data
        })

    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:err.message
        })
    }
}
