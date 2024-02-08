const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bookRouter=require("./controller/bookrouter")
const app=express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://amaldev123:amaldev1234@cluster0.dtrzikf.mongodb.net/bookDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/book",bookRouter)

app.listen(3001,()=>{
    console.log("server running")
})