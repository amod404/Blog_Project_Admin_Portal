const Content = require("../model/Content")
const Card = require("../model/Card")

exports.getContent = async (req,res) => {
    try{
        const {cardId} = req.body;
        console.log("cardId ->",cardId)
        if(!cardId){
            return res.status(401).json({
                success:false,
                message:"contentId is required"
            })
        }

        const cardDetail = await Card.findById(cardId).populate("contentId")
        if(!cardDetail){
            return res.status(404).json({
                success:false,
                message:"Content not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Content fetched successfully",
            data:cardDetail
        })

    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Failed to fetch the content",
            error:err.message
        })
    }
}

