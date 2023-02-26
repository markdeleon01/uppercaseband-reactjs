import { render, screen } from '@testing-library/react'
import Discography from './Discography'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('With React Testing Library', () => {
	const initialState = { discography: { releases: [] } }
	const mockStore = configureStore()
	let store

	test('renders Discography', () => {
		store = mockStore(initialState)
		render(
			<Provider store={store}>
				<Discography />
			</Provider>
		)

		// assert main page header
		const headerElement = screen.getByText(/U P P E R C A S E/i)
		expect(headerElement).toBeInTheDocument()

		// assert secondary page header
		const secondaryHeaderElement = screen.getByText(/Discography/i)
		expect(secondaryHeaderElement).toBeInTheDocument()
	})
})
