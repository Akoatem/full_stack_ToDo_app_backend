const mongoose = require("mongoose")


const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connected to Mongo Database ${conn.connection.host}`);
        
    } catch (error) {
       console.log(`Error in Mongo Database ${error}`);
    }
}

module.exports = connectDB