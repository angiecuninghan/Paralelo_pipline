/// <reference types="cypress" />

describe('Primer GTest con Cypress', ()=>{
    it("Esto es un hola mundo desde Cypress", () =>{
        cy.log("Bienvenido a Cypress")
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/index.html')

        cy.get("#nombre").type("Angie")
        cy.wait(1000)
        cy.get("#apellidos").type("Cuninghan")
        cy.wait(1000)
        cy.get("#tel").type("0961525829")
        cy.wait(1000)
        cy.get("#email").type("angie_cuninghan@gmail.com")
        cy.wait(1000)
        cy.get("#direccion").type("La joya")
        //cy.get("#flashhMessage").click

        cy.wait(4000)
    })

})