# Cypress - API - Serverest
## Projeto de exemplo na API Serverest - Virada da Qualidade

### Serverest:

O ServeRest é um servidor REST que simula uma loja virtual com intuito de servir de material de estudos de testes de API.

Essa página documenta todas as rotas e como acessá-las: https://serverest.dev/ 

Para mais detalhes do ServeRest (como executar localmente, etc) acesse o GitHub do projeto.
Github: https://github.com/ServeRest/ServeRest

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto. Você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/fabiocaraujo/virada-qualidade.git
```
```
cd virada-qualidade
```

#### Para instalar as dependencias:
```
npm install 
```

#### Suba o ambiente localhost
```
npx run start
```
Ou

```
npx serverest
```

Após a execução, basta acessar a documentação http://localhost:3000/ 

IMPORTANTE: Não feche o terminal com a execução do Serverest enquanto estiver usando.

#### Para executar em moodo Headlesss, via console
```
npx cypress run
```

#### Para executarVia Dashboard
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.


### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

-Faker: Biblioteca para geração de massa de dados: https://www.npmjs.com/package/faker

### Boa diversão ;) 
Qualquer crítica ou sugestão é bem vinda! 



