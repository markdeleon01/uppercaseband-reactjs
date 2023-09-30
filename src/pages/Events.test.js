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
		expect(screen.getByTestId('events-header-1')).toBeInTheDocument();

		// assert secondary page header
		expect(screen.getByTestId('events-header-2')).toBeInTheDocument();

		// assert page components
		expect(screen.getByTestId('events')).toBeInTheDocument();
	})
})
