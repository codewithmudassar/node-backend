const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:String,
    img:String,
    author:String
},{timestamps:true})


const blog = mongoose.model("Blog",blogSchema)


module.exports = blog