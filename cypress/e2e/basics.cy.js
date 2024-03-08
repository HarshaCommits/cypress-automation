describe('Cypress basics',function (){

   it('First test case',function (){

       // Basic landing
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#');

       //Basic assertion
       cy.get('.product').should('have.length',31);

       //Basic typing
       cy.get('.search-keyword').type('ca');
       cy.get('.product:visible').should('have.length',4);

       //Parent child chaining
       cy.get('.products').find('.product').should('have.length',4);

       //contains
       cy.get('.product:visible').eq(2).contains('ADD TO CART').click();

       //Iteration in multiple products
       cy.get('.products').find('.product')
           .each((el)=>{
               let productName= el.find('h4.product-name').text();
           if(productName.includes('Cashews')){
               cy.wrap(el).find('button').click();
           }
       })

       //Handling promise
       // const logo = cy.get('.brand');
       // cy.log(logo.text()); This does not usually work because we need only for cy method
       // promises are handled automatically for cy method else we have to use then()
       cy.get('.brand').then(function (logo){
           cy.log(logo.text());
       })

       //Aliasing
       cy.get('.products').as('productName');
       cy.get('@productName').find('.product').should('have.length',4);

       //Complete E2E flow
       cy.get('.cart-icon > img').click();
       cy.contains('PROCEED TO CHECKOUT').click();
       cy.contains('Place Order').click();
   });


});