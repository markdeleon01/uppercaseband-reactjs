import { render, screen } from '@testing-library/react'
import About from './About'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('With React Testing Library', () => {
    const initialState = { members: [] }
	const mockStore = configureStore()
	let store

	test('renders About', () => {
		store = mockStore(initialState)
		render(
			<Provider store={store}>
				<About />
			</Provider>
		)

		// assert main page header
		const headerElement = screen.getByText(/U P P E R C A S E/i)
		expect(headerElement).toBeInTheDocument()

		// assert secondary page header
		const secondaryHeaderElement = screen.getByText(/Band Members/i)
		expect(secondaryHeaderElement).toBeInTheDocument()
	})
})
