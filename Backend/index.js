const express = require("express")
const app=express();
const port = 5000
const dp=require("./db")



const FoodDetailsAPI=require("./routers/Food_Details")

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept");
    next();
  })

app.use('/api', FoodDetailsAPI);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})