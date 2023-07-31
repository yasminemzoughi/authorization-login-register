//1 require mongoose 
const mongoose = require ("mongoose")

// 2 creation function connectdb
const connectDB = async() =>{
try {
    mongoose.set("strictQuery", false)
    await mongoose.connect(process.env.DB_URI , { useNewUrlParser: true })
    console.log("Database connected ..")
} catch (error) {
    console.log("can not connect to database !!!", error)
}}

//3 export 
module.exports = connectDB;