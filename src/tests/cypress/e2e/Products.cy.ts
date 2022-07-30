describe('Products', () => {
  it('should be able to search all products', () => {
    cy.visit('/products')

    cy.dataCy('products').should('not.exist')

    cy.dataCy('search').click()

    cy.dataCy('products').should('exist')
  })

  it('should be able to filter using input', () => {
    const filterText = '9'

    cy.get('input[name="search"').type(filterText)

    cy.get('[data-cy="products"] > li').each($el => {
      expect($el.text()).contains(filterText)
    })

    cy.get('[data-cy="products"] > li').should('not.contain', 'Infinix INBOOK')
    cy.get('input[name="search"').clear()
    cy.get('[data-cy="products"] > li').should('contain', 'Infinix INBOOK')
  })
})

export {}
