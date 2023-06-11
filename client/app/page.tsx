import CardContainer from '@/src/shared/components/CardContainer/CardContainer'
import Feed from '@/src/Feed/Feed'
import { PostData } from '@/types/post'

async function getPosts(): Promise<PostData[]> {
  const response = await fetch('http://localhost:5000/api/v1/posts')
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

export default async function Home() {
  const postsData = getPosts()
  const [posts] = await Promise.all([postsData])
  return (
    <CardContainer>
      <main>
        <Feed posts={posts} />
      </main>
    </CardContainer>
  )
}
