import 'dotenv/config'

import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import codexRoutes from './routes/codex.routes'

const app = express()
const PORT = process.env.port || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/codex', codexRoutes)

process.env.NODE_ENV === 'production' &&
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  })

mongoose
  .connect(process.env.DB_URL || 'mongodb://localhost:27017/cruddy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB  => Connected.')
    app.listen(PORT, () => {
      console.log(`APP => Listening on port ${PORT}`)
    })
  })
  .catch(err => console.error(err))
