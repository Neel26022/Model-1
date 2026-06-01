import express from 'express'
import connectDB from './connectDB.js'
import 'dotenv/config'
const app = express()

connectDB()

app.listen(8080, console.log("Server is Started"))