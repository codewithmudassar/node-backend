const mongoose = require("mongoose")


const dbConnect = async () => {
    if(mongoose.connection.readyState >= 1){
        return
    }

    try {
        mongoose.connect("mongodb+srv://root:root@cluster0.mjjgsmt.mongodb.net/blog")
        console.log("db Connect")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect