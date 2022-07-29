describe('Home', () => {
  it('should be able to render Hello', () => {
    cy.visit('/')
    cy.get('body').should('contain', 'Hello')
  })
})

export {}
