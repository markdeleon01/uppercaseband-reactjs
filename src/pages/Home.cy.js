import React from 'react'
import Home from './Home'

describe('<Home />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Home />)
		cy.get('.home').should('exist')
		cy.get('.home').should('have.length', 1)
	})
})
