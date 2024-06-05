describe('Login module', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
  });

  it('Should exist input to login', () => {
    cy.visit('/');
    cy.get('#usuario').should ('exist');
    cy.get('#contrasena').should ('exist');
  });

  it('Should enter valid email and password and redirect to the main', () => {
    cy.visit('/');
    cy.get('#loginForm', { timeout: 10000 }).should('exist');
    cy.get('#usuario').type('admin');
    cy.get('#contrasena').type('admin');
    cy.get('#btn').click();
    cy.visit('/panel');
  });

});

describe('Navbar module', () => {
  it('Visits all pages', () => {
    cy.visit('/panel');
    cy.wait(1000);
    cy.visit('/notificaciones');
    cy.wait(1000);
    cy.visit('/usuarios');
    cy.wait(1000);
    cy.visit('/perfil');
    cy.wait(1000);
    cy.visit('/');
    cy.wait(1000);
  });


});

describe('Panel module', () => {
  it('Visits main page', () => {
    cy.visit('/panel');
    cy.get('#titulo').should ('be.visible');
    cy.get('#titulo').should ('have.text', 'Mapa');
  });

});

describe('Notificaciones module', () => {
  it('Visits notifications page', () => {
    cy.visit('/notificaciones');
    cy.get('#titulo').should ('be.visible');
    cy.get('#titulo').should ('have.text', 'Notificaciones');
  });

});

describe('Usuarios module', () => {
  it('Visits users page', () => {
    cy.visit('/usuarios');
    cy.get('#titulo').should ('be.visible');
    cy.get('#titulo').should ('have.text', 'Usuarios');
  });

});

describe('Perfil module', () => {
  it('Visits profile page', () => {
    cy.visit('/perfil');
    cy.get('#titulo').should ('be.visible');
    cy.get('#titulo').should ('have.text', 'Perfil');
  });

});