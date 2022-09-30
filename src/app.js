const express = require("express")
const app = express();
const port = process.env.PORT || 8000;
app.get("/",(req, res)=>{
    res.send("this is root folder!")
} )
app.post("/students",(req, res)=>{
    res.send("this is student page")
} )

app.listen(port,()=>{
    console.log(`connection is setup at port ${port}`);
})