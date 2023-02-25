import React from 'react'
import About from './About'

describe('<About />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<About />)
		cy.get('.about').should('exist')
		cy.get('.about').should('have.length', 1)
		cy.get('.about > .band-pic').should('exist')
		cy.get('.about > .band-pic').should('have.length', 1)
		cy.get('.about > .biography').should('exist')
		cy.get('.about > .biography').should('have.length', 1)
	})
})
