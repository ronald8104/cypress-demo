describe('Login Suite', function () {
  it('Login Test', function () {
    cy.log(this.test.parent.title);
    cy.log(this.test.title);
    cy.log(this.test);
    //Arrange
    cy.visit('https://react-redux.realworld.io/#/login?_k=gnue02');
    //Act
    cy.get('input[type="email"]').type('ronald8104@gmail.com');
    cy.get('input[type="password"]').type('user2010');
    cy.get('button[type="submit"]').click();
    //Assert
    cy.contains('Loading...').should('be.visible');
    cy.contains('No articles are here... yet.').should('be.visible');
  });

  it('Second Test', () => {
    //cy.log(this.test.parent.title);
  });
});
