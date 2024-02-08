const express=require("express")
const router=express.Router()
const bookModel=require("../model/bookmodel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let books=new bookModel(data)
    let result=await books.save()
    res.send({status:"success"})
})

router.get("/view",async(req,res)=>{
    let data=await bookModel.find()
    res.json(data)
})



module.exports=router