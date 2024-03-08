describe('Handling check box and dropdowns', function () {

    it('Second test case', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //Handling checkbox
        cy.get('#checkBoxOption1').check().should('be.checked')
            .and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //Check multiple checkbox
        cy.get('input[type="checkbox"]').check(['option3', 'option2']);

        //Static dropdown
        cy.get('select').select('option2')
            .should('have.value', 'option2');

        // Iterating static dropdown
        let count = 0;
        cy.get('option').each(($el) => {
            count++;
            cy.log($el.text());
        })

        //Total number of static list items
        cy.get('select').find('option').its('length')
            .then((numberOfOptions) => {
                cy.log('Number of options:', numberOfOptions);
            });

        //Dynamic dropdowns
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                cy.wrap($el).click();
            }
        })

        // Visible or not
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');

        // Radio button
        cy.get('[value="radio2"]').click().should('be.checked');

    })
});