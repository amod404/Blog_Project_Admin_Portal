const Mail = require("../model/Mail");

exports.addMail = async (req,res) => {
    try{
        const {mail} = req.body
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(mail.trim())){
            return res.status(404).json({
                success:false,
                message:"Wrong email"
            })
        }

        const mailDetail = await Mail.create({
            mail:mail.trim()
        });

        return res.status(200).json({
            success:true,
            message:"Mail creates successfully",
            data:mailDetail
        })        

    } catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"failed to add mail",
            error: err.message
        })
    }
}