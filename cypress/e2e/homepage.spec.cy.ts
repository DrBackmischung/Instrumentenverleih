describe('Homepage should', () => {
  it('open', () => {
    cy.visit('http://localhost:3000');
  })
  it('build', () => {
    cy.get('h1')
      .should('be.visible').should('contain.text','Instrumentenverleih')
    cy.get('h4')
      .should('be.visible').should('contain.text','Swipe up!').should('contain.text','^')
  })
})