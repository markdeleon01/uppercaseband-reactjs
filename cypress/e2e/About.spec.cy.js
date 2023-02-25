describe('Test the about page', () => {
	it('visits the about url', () => {
		cy.visit('http://localhost:3000/about')

		cy.title().should('eq', 'U P P E R C A S E')
        cy.get('.about').should('have.length', 1)
		cy.contains('h1', 'U P P E R C A S E')
		cy.contains('h2', 'Band Members')
	})

	it('clicks the about link', () => {
		cy.visit('http://localhost:3000/')
        cy.get('a[href="/about"]').click()

		cy.title().should('eq', 'U P P E R C A S E')
        cy.get('.about').should('have.length', 1)
		cy.contains('h1', 'U P P E R C A S E')
		cy.contains('h2', 'Band Members')
	})
})
