const mongoose=require("mongoose")

const bookScheme=new mongoose.Schema(
    {
        bookName:String,
        bookId:String,
        bookAuthor:String,
        bookPublication:String
    }
)

module.exports=mongoose.model("reg",bookScheme)