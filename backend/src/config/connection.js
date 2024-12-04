const mongoose = require("mongoose")
const connection = async()=>{
    try {
        await  mongoose.connect(process.env.MONGO_URL)
        console.log("mongoose Connected..!!!😊😊🏆");
        

    } catch (error) {
        console.log(error.message);
        
    }
}
module.exports=connection