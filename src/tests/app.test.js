import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders navigation links', () => {
  render(<App />)
  const nextLaunchLink = screen.getByText(/Next launch/i)
  const upcomingLink = screen.getByText(/Upcoming launches/i)

  expect(nextLaunchLink).toBeInTheDocument()
  expect(upcomingLink).toBeInTheDocument()
})