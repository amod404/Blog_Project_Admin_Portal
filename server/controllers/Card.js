const Card = require("../model/Card")
const Series = require("../model/Series")
const Content = require("../model/Content")
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
            content
        } = req.body;
        const thumbnail = req.files.thumbnail
        series = series.trim().replace(/\s+/g, "-").toLowerCase()

        let tags = []
        if(_tag){   
            tags = _tag.split(' ');
        }

        if(
            !title ||
            !description ||
            !thumbnail ||
            !series ||
            !content
        ){
            return res.status(400).json({
                success:false,
                messsage: "All field are mandatory.",
            })
        }

        const seriesDetails = await Series.findOne({name:series});

        if (!seriesDetails) {
          return res.status(404).json({
            success: false,
            message: "series Details Not Found",
          })
        }

        const thumbnailImage = await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME);  

        const contentDetails = await Content.create({
            data:content,
        })

        const newCard = await Card.create({
            title,
            description,
            contentId:contentDetails._id,
            thumbnail:thumbnailImage.secure_url,
            timeToRead,
            series:seriesDetails._id,
            tags:tags,
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
            data:newCard
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

exports.getCards = async (req,res) => {
    try{
        const cards = await Card.find({})
        if(!cards){
            throw new Error("No cards found")
        }
        
        return res.status(200).json({
            success:true,
            message:"cards fetched successfully",
            data:cards
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Failed to fetch cards",
            error:err.message
        })
    }
}
