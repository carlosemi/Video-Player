import path from 'path'
import express from 'express'
import videoRoutes from './routes/videoRoutes.js'
import connectDB from './config/db.js';

import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 5000
connectDB() //Connect to the mongo DB 

const app = express()

//Body parser middleware
app.use(express.json())

app.use('/api/videos', videoRoutes)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})