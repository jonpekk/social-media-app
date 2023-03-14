import rootRouter from "./routes/rootRouter"
import express from 'express'
import path from 'path'

const app = express()
const port = 5000

app.use(rootRouter)


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

export default app