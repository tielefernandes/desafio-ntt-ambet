# Projeto de Testes End-to-End com Cypress

Este projeto contém testes automatizados end-to-end (E2E) para a aplicação web [Serverest](https://front.serverest.dev/login) e utiliza o Cypress como framework de testes e JavaScript como linguagem de programação. 

## Visão Geral

O objetivo deste projeto é garantir a qualidade da aplicação através da automação de testes que simulam a interação do usuário com a interface.

## Tecnologias Utilizadas

*   [Node.js](https://nodejs.org/) (versão mínima recomendada: 18.16.1)
*   [npm](https://www.npmjs.com/) 
*   [Cypress](https://www.cypress.io/) (13.17.0)


## Instalação

1.  Clone este repositório:

    ```bash
    git clone '(https://github.com/tielefernandes/desafio-ntt-ambev-e2e.git)'
    ```

2.  Instale as dependências:

    ```bash
    npm install  
    ```

## Configuração

*   **`cypress.config.js`:** Este arquivo contém as configurações do Cypress, incluindo o `baseUrl`. 

    ```javascript
    const { defineConfig } = require("cypress");

    module.exports = defineConfig({
      e2e: {
        baseUrl: '(https://front.serverest.dev)', // URL base da aplicação
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
      },
    });
    ```

*   **`cypress/fixtures/login_data.json`:** Este arquivo contém os dados de teste para o login. Exemplo:

    ```json
    {
        "emailValido": "email_invalido@email.com",
        "senhaValida": "senha_invalida"
    }
    ```

## Executando os Testes

Existem duas maneiras de executar os testes:

1.  **Modo Interativo (Cypress Test Runner):**

    ```bash
    npx cypress open 
    ```

    Isso abrirá o Cypress Test Runner, onde  é possível selecionar e executar os testes interativamente.

2.  **Modo Headless (Linha de Comando):**

    ```bash
    npx cypress run 
    ```

    Isso executará os testes em modo headless (sem interface gráfica) e gerará relatórios.
