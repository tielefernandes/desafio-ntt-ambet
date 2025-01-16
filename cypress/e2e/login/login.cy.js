import LoginPage from '../../page_objects/login_page';


describe('Testes de Login', () => {
    let loginData;

    beforeEach(() => {
        cy.fixture('login_data').then((data) => {
            loginData = data
        });
    });

    it('Deve logar com credenciais válidas', () => {
        LoginPage.visitar();
        LoginPage.preencherEmail(loginData.emailValido);
        LoginPage.preencherSenha(loginData.senhaValida);
        LoginPage.clicarEntrar();
    
        cy.url().should('include', '/home');
    });
    
    it('Não deve logar com email inválido', () => {
        LoginPage.visitar();
        LoginPage.preencherEmail(loginData.emailInvalido);
        LoginPage.preencherSenha(loginData.senhaValida);
        LoginPage.clicarEntrar();

        LoginPage.verificarMensagemDeErro(loginData.mensagemEmailInvalido);
    });

    it('Não deve logar com senha inválida', () => {
        LoginPage.visitar();
        LoginPage.preencherEmail(loginData.emailValido);
        LoginPage.preencherSenha(loginData.senhaInvalida);
        LoginPage.clicarEntrar();

        LoginPage.verificarMensagemDeErro(loginData.mensagemSenhaInvalida);
    });
});