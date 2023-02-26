import { render, screen } from '@testing-library/react'
import Events from './Events'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('With React Testing Library', () => {
	const initialState = { events: [] }
	const mockStore = configureStore()
	let store

	test('renders Events', () => {
		store = mockStore(initialState)
		render(
			<Provider store={store}>
				<Events />
			</Provider>
		)

		// assert main page header
		const headerElement = screen.getByText(/U P P E R C A S E/i)
		expect(headerElement).toBeInTheDocument()

		// assert secondary page header
		const secondaryHeaderElement = screen.getByText(/Events/i)
		expect(secondaryHeaderElement).toBeInTheDocument()
	})
})
