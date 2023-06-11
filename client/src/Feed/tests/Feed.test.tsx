import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Feed from '../Feed'
import { dummyData } from './data'

describe('When looking at the feed', () => {
  test('I am able to see multiple posts', () => {
    render(<Feed posts={dummyData} />)

    const firstPost = screen.getByText(dummyData[0].content)
    const secondPost = screen.getByText(dummyData[1].content)

    expect(firstPost).toBeInTheDocument()
    expect(secondPost).toBeInTheDocument()
  })
})

