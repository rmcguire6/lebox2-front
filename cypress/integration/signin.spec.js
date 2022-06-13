describe('Signin form', () => {
    beforeEach(() => {
        cy.visit('/signin/')
    })
    it('accepts input', () => {
      cy.get('.email').type('bob@as.net').should('have.value', 'bob@as.net');
      cy.get('.password').type('1234').should('have.value', '1234');
    });
})
