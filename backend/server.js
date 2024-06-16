import path from 'path'
import express from 'express'
import videRoutes from './routes/videoRoutes.js'

const port = process.env.PORT || 5000

const app = express()

app.use('/api/videos', )

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})