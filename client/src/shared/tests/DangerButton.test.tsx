import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DangerButton from '../components/Buttons/DangerButton'

describe('Danger button', () => {
  test('that it shows up', () => {
    render(
      <DangerButton>
        Something
      </DangerButton>
    )

    const buttonText = screen.getByText('Something')

    expect(buttonText).toBeInTheDocument()
  })
})