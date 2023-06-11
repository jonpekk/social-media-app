import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Post from '../Post/Post'
import { dummyData } from './data'
import { PostData } from '@/types/post'

describe('When looking at a post', () => {
  test('I am able to see the content, poster, and creation date', () => {
    const post: PostData = dummyData[0]
    render(<Post data={post} />)

    const postContent = screen.getByText(post.content)
    const postDate = screen.getByText(new Date(post.createdAt).toLocaleDateString())
    const poster = screen.getByText(post.authorHandle)

    expect(postContent).toBeInTheDocument()
    expect(postDate).toBeInTheDocument()
    expect(poster).toBeInTheDocument()
  })
})

