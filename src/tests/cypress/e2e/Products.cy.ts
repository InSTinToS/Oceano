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

  it('should be able update products', () => {
    const updateValues = {
      price: '1',
      title: 'TITLE',
      discountPercentage: '1',
      description: 'DESCRIPTION'
    }

    cy.get('[data-cy="items"] > li:nth-child(1)').click()

    cy.url().should('contain', 'products/1')

    cy.get('header > button').click({ multiple: true })

    cy.get('[name="title"]').type(updateValues.title)
    cy.get('[name="price"]').type(updateValues.price)
    cy.get('[name="discountPercentage"]').type(updateValues.discountPercentage)
    cy.get('[name="description"]').type(updateValues.description)

    cy.get('button[type="submit"]').click()

    Object.values(updateValues).forEach(value =>
      cy.get('header').should('contain.text', value)
    )

    cy.get('nav img').click()

    cy.url().should('not.contain', 'products/')

    cy.get('input[name="search"').clear().type('TITLE')
    cy.get('[data-cy="items"] > li:nth-child(1)').click()

    cy.url().should('contain', 'products/1')
  })
})

export {}
