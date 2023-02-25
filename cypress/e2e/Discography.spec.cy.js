describe('Test the discography page', () => {
	it('visits the discography url', () => {
		cy.visit('http://localhost:3000/discography')

		cy.title().should('eq', 'U P P E R C A S E')
		cy.get('.discography').should('have.length', 1)
		cy.contains('h1', 'U P P E R C A S E')
		cy.contains('h2', 'Discography')
	})

	it('clicks the discography link', () => {
		cy.visit('http://localhost:3000/')
		cy.get('a[href="/discography"]').click()

		cy.title().should('eq', 'U P P E R C A S E')
		cy.get('.discography').should('have.length', 1)
		cy.contains('h1', 'U P P E R C A S E')
		cy.contains('h2', 'Discography')
	})
})
