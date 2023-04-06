describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('My First Test', function () {
  //act
      it('Does not do much', function() {
  //assert
          expect(true).to.equal(true);
      })
  })

  describe('Header Text', function() {
    it('Checks if header text exists', function () { })
})
describe('Header Text', function() {
  it('Checks if header text exists', function () {
  cy.visit("http://localhost:3000/");
})
})
describe('Link Navigation', function() {
  it('formlarvar mi?', function() {
    cy.visit('http://localhost:3000/');

    cy.contains('Formu temizle').click()
    cy.contains('İsim').click()
    cy.contains('Veri Bilgileri').click()
   
    // Should be on a new URL which includes '/commands/actions'
   // cy.url().should('include', 'instagram.com/')
  })
})
describe('Link Navigation', function() {
  it('isim bileşeni var mı', function() {
    cy.visit('http://localhost:3000/');

    cy.get('.form-line').contains('İsim');
    cy.get('button').contains('Formu temizle');
   cy.get('.form-line').find('input[type=checkbox]')
   cy.get('.form-line label').first().should('have.text', 'İsim')
    // Should be on a new URL which includes '/commands/actions'
   // cy.url().should('include', 'instagram.com/')
  })
})
describe('Link Navigation', function() {
  it('checboxlar tam mı', function() {
    cy.visit('http://localhost:3000/');

    cy.get('.form-line').contains('isim');
    cy.get('.form-line').contains('email');
    cy.get('.form-line').contains('şifre');
   
    // Should be on a new URL which includes '/commands/actions'
   // cy.url().should('include', 'instagram.com/')
  })
})
describe('Link Navigation', function() {
  it('test geçer mi', function() {
    cy.visit('http://localhost:3000/');

    cy.get('input[name="isimDegeri"]').type('isimler');
    cy.get('input[value="kiraz"]').click();
    cy.get('input[value="üzüm"]').click();
    cy.get('button[type="submit"]').should("be.visible");
    
   
    // Should be on a new URL which includes '/commands/actions'
   // cy.url().should('include', 'instagram.com/')
  })
})