import express from 'express'
import cors from 'cors'
import texts from './routes/texts'
import errorHandler from './middlewares/errorHandler'
import sequelize from './db'
import { config } from './config'

const app = express()

app.use(express.json()) // Middleware transforma la req.body a json
app.use(cors()) // Cross-Origin Resource Sharing, HTTP header

app.use('/texts', texts)

app.use(errorHandler)

sequelize.sync({ force: true }).then(() => {
  app.listen(config.port, () => {
    console.log(`The server is running on the port ${config.port} `)
  })
})
