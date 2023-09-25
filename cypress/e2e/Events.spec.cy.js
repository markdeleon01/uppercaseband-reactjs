describe('Test the events page', () => {
	it('visits the events url', () => {
		cy.visit('http://localhost:3000/events')

		cy.title().should('eq', 'U P P E R C A S E')
		cy.get('.events').should('have.length', 1)
		cy.contains('h1', 'U P P E R C A S E')
		cy.contains('h2', 'Events')
        cy.get('.event-item').should('exist')
		cy.get('.event-item').should('have.length', 6)
	})

	it('clicks the events link', () => {
		cy.visit('http://localhost:3000/')
		cy.get('a[href="/events"]').click()

		cy.title().should('eq', 'U P P E R C A S E')
		cy.get('.events').should('have.length', 1)
		cy.contains('h1', 'U P P E R C A S E')
		cy.contains('h2', 'Events')
        cy.get('.event-item').should('exist')
		cy.get('.event-item').should('have.length', 6)
	})
})
