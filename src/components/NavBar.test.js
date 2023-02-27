import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from './NavBar'

test('renders NavBar', () => {
	render(<NavBar />, { wrapper: MemoryRouter })

	// assert navigation links
	expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/About/i)).toBeInTheDocument()
    expect(screen.getByText(/Discography/i)).toBeInTheDocument()
    expect(screen.getByText(/Events/i)).toBeInTheDocument()
})
