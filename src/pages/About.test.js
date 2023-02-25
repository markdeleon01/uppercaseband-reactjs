import { render, screen } from '@testing-library/react'
import About from './About'

test('renders About', () => {
	render(<About />)

	// assert main page header
	const headerElement = screen.getByText(/U P P E R C A S E/i)
	expect(headerElement).toBeInTheDocument()

	// assert secondary page header
	const secondaryHeaderElement = screen.getByText(/Band Members/i)
	expect(secondaryHeaderElement).toBeInTheDocument()
})
