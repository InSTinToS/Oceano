describe('Products', () => {
  it('should be able to show products on start', () => {
    cy.visit('/products')

    cy.dataCy('items').should('exist')
  })

  it('should be able to filter using input', () => {
    const filterText = '9'

    cy.get('input[name="search"').type(filterText)

    cy.get('[data-cy="items"] > li').each($el => {
      expect($el.text()).contains(filterText)
    })

    cy.get('[data-cy="items"] > li').should('not.contain', 'Infinix INBOOK')
    cy.get('input[name="search"').clear()
    cy.get('[data-cy="items"] > li').should('contain', 'Infinix INBOOK')
  })

  it('should be able to access /products/:id page', () => {
    cy.get('[data-cy="items"] > li:nth-child(1)').click()

    cy.url().should('contain', 'products/')

    cy.get('nav img').click()

    cy.url().should('not.contain', 'products/')
  })
})

export {}
