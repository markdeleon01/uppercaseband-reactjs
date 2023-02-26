import React from 'react'
import Events from './Events'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('<Events />', () => {
	const initialState = { events: [] }
	const mockStore = configureStore()
	let store

	it('renders', () => {
		store = mockStore(initialState)

		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<Provider store={store}>
				<Events />
			</Provider>
		)
		cy.get('.events').should('exist')
		cy.get('.events').should('have.length', 1)
	})
})
