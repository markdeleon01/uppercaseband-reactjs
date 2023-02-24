describe('Test the home page', () => {
	it('visits the app root url', () => {
		cy.visit('http://localhost:3000/')
		cy.get('h1').contains('U P P E R C A S E')
	})
})
