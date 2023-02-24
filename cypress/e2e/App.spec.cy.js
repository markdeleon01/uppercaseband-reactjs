describe('Test the home page', () => {
  it('visits the app root url', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.App').should('have.length', 1)
  })
})