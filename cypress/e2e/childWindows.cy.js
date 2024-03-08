import 'cypress-iframe'

describe('Cypress basics',function (){

    it('Third test case',function (){

        // Basic landing
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // Mouse hover
        cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click({force:true});

        // Handling child windows
        cy.get('#opentab').invoke('removeAttr','target').click();

        // Handling iframes
        // Install npm -D cypress-iframe
        // ///  <reference types="Cypress" />
        // ///  <reference types="cypress-iframe" />
        // Then import package import 'cypress-iframe'
        //cy.frameLoaded('#courses-iframe');
        //cy.iframe. get() / find() anything we can do

        // Cross origin testing
        cy.origin('https://qaclickacademy.com',()=>{
            // Write test here
        })



    });


});