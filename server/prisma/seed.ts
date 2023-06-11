import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const initialPosts = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
      email: 'test@test.com',
      name: 'Jon',
      userName: 'jonpekk',
      posts: {
        create: [
          {
            content: 'This is the first post',
            published: true
          },
          {
            content: "this is the second post",
            published: true
          },
          {
            content: "this is a drafted post",
          }
        ]
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })