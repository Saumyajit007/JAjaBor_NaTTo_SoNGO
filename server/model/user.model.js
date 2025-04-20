const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    googleID:{
        type:Number,
        unique:true,
        index:true,
        required:true,
    },
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is not recived"]
    },
    role:{
        type:String,
        default:"visitor",
        enum:['visitor','member','admin'],
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model("User",UserSchema)