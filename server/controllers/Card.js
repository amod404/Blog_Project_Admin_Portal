const Card = require("../model/Card")
const Category = require("../model/Category")
const {uploadImageToCloudinary} = require("../utils/imageUploader")

exports.createCard = async (req,res) => {
    try{
        let {
            title,
            description,
            timeToRead,
            tags:_tag,
            category,
            date
        } = req.body;

        const thumbnail = req.files.thumbnail;

        const tags = JSON.parse(_tag)
        console.log(_tag)

        if(
            !title ||
            !description ||
            !thumbnail ||
            ! category ||
            ! date
        ){
            return res.status(400).json({
                success:false,
                messsage: "All field are mandatory.",
            })
        }


    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Falied to create course",
            error:err.message
        })
    }
}
