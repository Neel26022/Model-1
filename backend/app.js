const express = require("express")

const app = express()
const PORT = 3000

app.get('/',(req,res) => {
    res.send("Home page")
})
app.get('/about',(req,res) => {
    res.send("About page")
})
app.get('/service',(req,res) => {
    res.send("Services page")
})

app.listen((PORT) => {
    console.log("Server started At http://localhost:3000");
    
})