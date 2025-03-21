const Card = require("../model/Card")
const Series = require("../model/Series")
const {uploadImageToCloudinary} = require("../utils/imageUploader")
require("dotenv").config();

exports.createCard = async (req,res) => {
    try{
        let {
            title,
            description,
            timeToRead,
            tags:_tag,
            series,
            date,
        } = req.body;
        
        const thumbnail = req.files.thumbnail
        console.log("request -> " , req.body);

        console.log("tags -> ",_tag)

        if(
            !title ||
            !description ||
            !thumbnail ||
            !series ||
            !date
        ){
            return res.status(400).json({
                success:false,
                messsage: "All field are mandatory.",
            })
        }

        const seriesDetails = await Series.findOne({name:series});
        console.log("series->",seriesDetails);
        if (!seriesDetails) {
          return res.status(404).json({
            success: false,
            message: "series Details Not Found",
          })
        }

        
        // const thumbnailImage = await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME);
        console.log(thumbnail);
        
        const newCard = await Card.create({
            title,
            description,
            thumbnail:thumbnail.secure_url,
            timeToRead,
            series:seriesDetails._id,
            date,
        })
        
        await Series.findByIdAndUpdate(
            {
                _id:seriesDetails._id,
            },
            {
                $push: {
                    cards:newCard._id,
                },
            },
            { new:true }
        )

        return res.status(200).json({
            success:true,
            message:"card created successfully",
        });

    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Falied to create course",
            error:err.message
        })
    }
}
