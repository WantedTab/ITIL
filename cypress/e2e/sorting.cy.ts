describe('sorting', () => {
  it('by price', () => {
    cy.visit('https://r1070111-realbeans.myshopify.com');
    cy.get('#password').type('seigao');
    cy.get('button').click();

    cy.get('#HeaderMenu-catalog > span').click();

    cy.get('#SortBy').select('Price, low to high');
    cy.get('#SortBy').select('Price, high to low');

    cy.get('#Filter-Price-GTE').clear({ force: true }).type('40', { force: true });
    cy.get('#Filter-Price-LTE').clear({ force: true }).type('55', { force: true });


      
  });
});