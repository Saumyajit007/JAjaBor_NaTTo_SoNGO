const mongoose=require("mongoose")

const dbConnect=async ()=>{
    try {
      const connctionString=await  mongoose.connect(`${process.env.MONGODB_URI}/jajaborclub`)
      console.log(`database connected :${connctionString.connection.host}`)
    } catch (error) {
        console.log("mongoose error: ",error)
        process.exit(1)
    }
}

module.exports={dbConnect}