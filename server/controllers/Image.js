const Image = require("../model/Image")
const {uploadImageToCloudinary} = require("../utils/imageUploader")
require("dotenv").config();

exports.uploadImage = async (req,res) => {
    
    try{    
        let image = req?.files?.image;
        if(!image){
            return res.status(403).json({
                success:false,
                message:"image is mandatory"
            })
        }
    
        const imageDetails = await uploadImageToCloudinary(image,process.env.FOLDER_NAME)
        const newImage = await Image.create({
            imageUrl:imageDetails.secure_url
        })

        return res.status(200).json({
            success:true,
            message:"Image uploaded successfully",
            data:newImage
        })

    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"something went wrong",
            error:err.message
        });
    }
}