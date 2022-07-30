describe('Products', () => {
  it('should be able to search all products', () => {
    cy.visit('/products')

    cy.dataCy('products').should('not.exist')

    cy.dataCy('search').click()

    cy.dataCy('products').should('exist')
  })
})

export {}
