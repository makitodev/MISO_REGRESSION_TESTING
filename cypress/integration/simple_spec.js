describe('Regression Testing', () => {

    context('Generate Random Colors', () => {
      beforeEach(function () {
        cy.visit('https://makitodev.github.io/MISO_REGRESSION_TESTING/')
      })
  
      it('CASE 1 ---> Generate Random Color', () => {
        //cy.contains('Paleta de colores')
        cy.screenshot('C1_Before_GenerateRandomColor')
        cy.contains(' Generar nueva paleta').click()
        cy.screenshot('C1_After_GenerateRandomColor')
      })
      it('CASE 2 ---> Generate random color when it isnt white', () => {
        //cy.contains('Paleta de colores')      
        cy.contains(' Generar nueva paleta').click()
        cy.screenshot('C2_Before_RandomColorWhenNotWhite')
        cy.contains(' Generar nueva paleta').click()
        cy.screenshot('C2_After_RandomColorWhenNotWhite')
      })
    })
  
    context('Clean Palette', () => {
      beforeEach(function () {
        cy.visit('https://makitodev.github.io/MISO_REGRESSION_TESTING/')
      })
  
      it('CASE 3 ----> Clean color when palette has selected', () => {
        //cy.contains('Paleta de colores')
        cy.contains(' Generar nueva paleta').click()      
        cy.screenshot('C3_Before_CleanColor')
        cy.contains(' Limpiar paleta').click()
        cy.screenshot('C3_After_CleanColor')
      })
    })
  })
  