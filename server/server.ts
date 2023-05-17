import rootRouter from "./routes/rootRouter"
import * as dotenv from 'dotenv'
import express from 'express'
import path from 'path'

dotenv.config({ path: path.join(__dirname, "/.env") })

const app = express()
const port = 5000

app.use(rootRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

export default app

