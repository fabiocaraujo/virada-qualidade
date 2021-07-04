/// <reference types="cypress" />
var faker = require('faker/locale/pt_BR');

let urlUsuario = 'http://localhost:3000/usuarios/'
let nomeFake = faker.name.findName()
let emailFake = faker.internet.email(nomeFake)

describe('Funcionalidade Usuários do Serverest', () => {
    it('Listar usuários - GET', () => {
        cy.request({
            method: 'GET',
            url: urlUsuario
        }).should((response) => {
            cy.log(response.status)
            expect(response.status).to.equal(200)
        })
    });

    it('Cadastrar Usuário - POST', () => {
        cy.log(emailFake)
        cy.log(nomeFake)

        cy.request({
            method: 'POST',
            url: urlUsuario,
            body:
            {
                "nome": nomeFake,
                "email": emailFake,
                "password": "teste@123",
                "administrador": "false"
            }
        }).then(({status, body}) => {
            expect(status).to.equal(201)
            expect(body.message).to.equal("Cadastro realizado com sucesso")

            cy.log(body._id)
            let idUsuario = body._id

            cy.request(urlUsuario + idUsuario)
            .should(({body}) =>{
                expect(body.email).to.equal(emailFake)
            })
        })
    });

});

