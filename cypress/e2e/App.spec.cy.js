describe('Test the home page', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get('.App').should('have.length', 1)
  })
})