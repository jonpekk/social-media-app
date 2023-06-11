import express from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.get("/", async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: true }
  })
  res.json(posts)
})

export default router