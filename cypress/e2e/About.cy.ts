describe('About page', () => {
  it('submits password and check about', () => {
    cy.visit('https://r1070111-realbeans.myshopify.com');
    cy.get('#password').type('seigao');
    cy.get('button').click();

    cy.get('.banner__buttons > .button--primary').click()

    cy.get(".rte > p").contains(
      "From a small Antwerp grocery to a European coffee staple, RealBeans honors tradition while innovating for the future. Our beans are roasted in-house, shipped from Antwerp or Stockholm, and loved across the continent."
    )
  });

});
