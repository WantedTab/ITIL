describe('product detail ', () => {
  it('check description, price, and image name', () => {
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes("Cannot read properties of null")) {
        return false;
      }
    });

    cy.visit('https://r1070111-realbeans.myshopify.com');
    cy.get('#password').type('seigao');
    cy.get('button').click();

    cy.get('#CardLink-template--25223077495109__featured_collection-15084274090309')
      .click();

    cy.get('h1')
      .should('be.visible')
      .and('contain', 'Blended coffee 5kg');

    cy.get('.price__regular > .price-item')
      .should('be.visible')
      .and('contain', '€55,00 EUR');

    cy.get('.product__media-item img')
      .should('have.attr', 'src')
      .and('include', 'RealBeansBlendBag.png');




    cy.get('#HeaderMenu-home > span')
      .click();

    cy.get('#CardLink-template--25223077495109__featured_collection-15084265046341')
      .click();

    cy.get('h1')
      .should('be.visible')
      .and('contain', 'Roasted coffee beans 5kg');

    cy.get('.price__regular > .price-item')
      .should('be.visible')
      .and('contain', '€40,00 EUR');

    cy.get('.product__media-item img')
      .should('have.attr', 'src')
      .and('include', 'RealBeansRoastedBag.png');

  });
});
