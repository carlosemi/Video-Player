import express from 'express'
import videoRoutes from './routes/videoRoutes.js'

const port = process.env.PORT || 5000

const app = express()

//Body parser middleware
app.use(express.json())

app.use('/api/videos', videoRoutes)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})