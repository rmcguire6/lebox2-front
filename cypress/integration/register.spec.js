describe('Register form', () => {
    beforeEach(() => {
        cy.visit('/register')
    })
    it('focuses input on load', () => {
      cy.focused().should('have.class', 'username');
    });
    it('accepts input', () => {
      cy.get('.username').type('Bob').should('have.value', 
      'Bob');
      cy.get('.email').type('bob@as.net').should('have.value', 'bob@as.net');
      cy.get('.password').type('1234').should('have.value', '1234');
    });
    context('new user form submission', () => {
 
      it
      ('Adds a new user on submit', () => {
        cy.intercept('POST', '/users/', {
          user_id: 999,
          username: 'Bob',
          email: 'bob@as.net',
          password: '1234',
          cards_per_day: 2,
          current_day_number: 1,
          created_at: "2022-05-14"
        }).as('addUser')
        cy.visit('/register')

        cy.get('.username').type('Bob').should('have.value', 
        'Bob');
        cy.get('.email').type('bob@as.net').should('have.value', 'bob@as.net');
        cy.get('.password').type('1234').should('have.value', '1234');
        cy.contains('Create a New Account').click()
        
        cy.wait('@addUser').its('response.body').should('exist')
          .and('contain', {"username":'Bob', "email": 'bob@as.net', "current_day_number":1})

      });
      it('Shows an error message on a failed submission', () => {
        cy.server()
        cy.route({
          url: '/test_cards/',
          method: 'POST',
          status: 500,
          response: {},
        });
        cy.get('.newUser_button').click();
        cy.get('.submission-error').should('be.visible');
      });
   });
});
