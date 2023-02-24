import React from 'react'
import App from './App'

describe('<App />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<App />)
		cy.get('.App').should('exist')
		cy.get('.App').should('have.length', 1)
	})
})
