const express = require("express")
const app = express()

app.use(express.json())

let matches = []

app.post("/addMatch",(req,res)=>{

matches.push(req.body)
res.send("Match Added")

})

app.get("/matches",(req,res)=>{
res.json(matches)
})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})