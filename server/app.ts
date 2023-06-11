import express from 'express'
import rootRouter from './routes/rootRouter'

const app = express()

app.use(express.json())

app.use(rootRouter)

export default app
