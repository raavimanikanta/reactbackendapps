const express=require("express");
const cors=require("cors")

const CategoryRouter=require("./controllerouter")

const app=express();

app.use(cors())
app.use("/api",CategoryRouter)

app.listen(process.env.PORT||5000,()=>{console.log("Started")})