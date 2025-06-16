const express = require("express")
const app = express()
app.use(express.json())
const port = 4500 || 4501 ||4502
const blog = require("./model/blog")
const db = require("./db")
const cors = require("cors")
app.use(cors());

db()

app.post("/api/blog",async(req,res)=>{
    const data = req.body
    try {
        const blogData = await blog.create(data)
        res.status(200).json({
            blog:blogData
        })
    } catch (error) {
         res.status(500).json({
            error
        })
    }
})
app.get("/api/blog",async(req,res)=>{
   try {
        const blogData = await blog.find()
        res.status(200).json({
            blogs:blogData 
        })
    } catch (error) {  
         res.status(500).json({
            error
        })
    }
})
app.get("/api/blog/:id",async(req,res)=>{
   try {
    const {id} = req.params
        const blogData = await blog.findById(id)
        res.status(200).json({
            blog:blogData
        })
    } catch (error) {
         res.status(500).json({
            error
        })
    }
})
app.put("/api/blog/:id",async(req,res)=>{
   try {
    const {id} = req.params
    const data = req.body
        const blogData = await blog.findByIdAndUpdate(id,data,{new:true})
        res.status(200).json({
            blog:blogData
        })
    } catch (error) {
         res.status(500).json({
            error
        })
    }
})
app.delete("/api/blog/:id",async(req,res)=>{
   try {
    const {id} = req.params
        const blogData = await blog.findByIdAndDelete(id)
        res.status(200).json({
            blog:blogData
        })
    } catch (error) {
         res.status(500).json({
            error
        })
    }
})


app.listen(port,()=>{
    console.log("server is running")
})