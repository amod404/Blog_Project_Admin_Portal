const Content = require("../model/Content")

exports.getContent = async (req,res) => {
    try{
        const {contentId} = req.body;

        if(!contentId){
            return res.status(401).json({
                success:false,
                message:"contentId is required"
            })
        }

        const content = await Content.findById(contentId);
        if(!content){
            return res.status(404).json({
                success:false,
                message:"Content not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Content fetched successfully",
            data:content
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

