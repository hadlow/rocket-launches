import React from 'react'
import { render, screen, waitFor, findByTestId } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import Upcoming from '../pages/upcoming'

describe('Upcoming page', () => {
  it('data loads', async () => {
    render(<Upcoming />)

    await waitFor(() => {
      const heading = screen.getByText('Upcoming launches')

      expect(heading).toBeInTheDocument()
    })
  })

  it('saves to localStorage', async () => {
    render(<Upcoming />)

    await screen.findByTestId('addToFavouritesBtn-0')

    const addToFavouritesBtn0 = screen.getByTestId('addToFavouritesBtn-0')
    const addToFavouritesBtn1 = screen.getByTestId('addToFavouritesBtn-1')

    UserEvent.click(addToFavouritesBtn0)
    UserEvent.click(addToFavouritesBtn1)

    await waitFor(() => {
      expect(JSON.parse(localStorage.getItem('favourites')).length).toEqual(2)
    })
  })
})