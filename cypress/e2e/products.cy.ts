describe('Homepage UI Test', () => {
  it('should display the intro text and product list correctly', () => {
    cy.visit('https://r1070111-realbeans.myshopify.com');
    cy.get('#password').type('seigao');
    cy.get('button').click();

    cy.get('em')
      .should('be.visible')
      .and('contain', 'Since 1801, RealBeans has roasted premium coffee in Antwerp for Europe’s finest cafes. Ethically sourced beans, crafted with care.');

    cy.get('#Slider-template--25223077495109__featured_collection')
      .should('exist');

    cy.get('#Slider-template--25223077495109__featured_collection')
      .should('have.length.greaterThan', 0);

    cy.get('#CardLink-template--25223077495109__featured_collection-15084274090309')
      .should('be.visible')
      .and('contain', 'Blended coffee 5kg');

    cy.get('#CardLink-template--25223077495109__featured_collection-15084265046341')
      .should('be.visible')
      .and('contain', 'Roasted coffee beans 5kg');
  });
});
export {};