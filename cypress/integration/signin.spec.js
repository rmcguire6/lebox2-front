describe('Signing in', () => {
  it('accepts input and returns a token', () => {
    const formData = new FormData();
    formData.append('username', 'bob@as.net');
    formData.append('password', '1234');
    cy.intercept('POST', '/signin/', {
      body: formData,
      headers: {
        'Content-type': 'multipart/form-data',
      },
    }).as('signIn');
    cy.visit('/signin');
    cy.get('.email').type('bob@as.net').should('have.value', 'bob@as.net');
    cy.get('.password').type('1234').should('have.value', '1234');
    cy.contains('Sign In').click();
    cy.wait('@signIn').its('request.body').should('contain', {
      formData: formData,
    });
  });
});
