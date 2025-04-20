const mongoose=require("mongoose")

const announcement=new mongoose.Schema({
    urlString:String,
    required:true
},{
    timestamps:true
})

const announcements=mongoose.model("announcement",announcement)

module.exports={announcements}