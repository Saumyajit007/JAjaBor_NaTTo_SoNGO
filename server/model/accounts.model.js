const mongoose=require("mongoose")

const AccountDetails=new mongoose.Schema({
    user_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    type:{
        type:String,
        enum:["debit","credit"],
        required:[true,"select debit/credit"]
    },
    amount:{
        type:Number,
        required:[true,"amount is empty"]
    },
    date:{
        type:Date,
        required:[true,"account details date require"]
    },
    status:{
        type:String,
        enum:["success","pending","rejected"],
        default:"pending",
        required:[true,"account status is required"]
    }
},{
    timestamps:true
})


const accountsInfo=mongoose.model("AmountDetails",AccountDetails)

module.exports={accountsInfo}