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
		expect(screen.getByTestId('about-header-1')).toBeInTheDocument();

		// assert secondary page header
		expect(screen.getByTestId('about-header-2')).toBeInTheDocument();

		// assert page components
		expect(screen.getByTestId('about')).toBeInTheDocument();
		expect(screen.getByTestId('band-pic')).toBeInTheDocument();
		expect(screen.getByTestId('biography')).toBeInTheDocument();
	})
})
