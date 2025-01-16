class LoginPage {

    visitar() {
      cy.visit('/');
    }
  
    preencherEmail(email) {
      cy.get('#email').type(email);
    }
  
    preencherSenha(senha) {
      cy.get('#password').type(senha);
    }
  
    clicarEntrar() {
        cy.get('[data-testid="entrar"]').click();
    }
  
    verificarMensagemDeErro(mensagem) {
      cy.get('span').should('contain', mensagem); 
    }
  }
  
  export default new LoginPage(); 