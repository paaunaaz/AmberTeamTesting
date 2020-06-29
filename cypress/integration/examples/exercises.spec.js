describe('Exercises', () => {
    const openPage = () => {
        cy.visit('https://antycaptcha.amberteam.pl/');
        cy.get('.container h1').should('have.text', 'Exercises for test automation of web applications');
    };
    it('Open Exercise 1', () => {
        openPage();
        // Open an exercise 1
        cy.get('.button').contains('Exercise 1 - Three buttons').click();
        cy.get('h1.title').should('have.text', 'Exercise 1 - Three buttons');
        // Click on button with name is defined in the first row
        cy.get('tr:nth-child(2)').find('code')
            .then(element => {
                cy.get('button').contains(element.text()).click();
            });
        // Click on button with name is defined in the second row
        cy.get('tr:nth-child(3)').find('code')
            .then(element => {
                cy.get('button').contains(element.text()).click();
            });
        // Click on button which name is defined in the last row
        cy.get('tr:nth-child(4) td:nth-child(2)').find('code')
            .then(element => {
                cy.get('button').contains(element.text()).click();
            });
        // Get expected result and compare with actual result
        cy.get('td').contains('Trail set to:').find('code')
            .then((element) => {
                cy.get('code.wrap').should('have.text', element.text());
            });
        // Click and check solution
        cy.get('button#solution').contains('Check solution').click();
        cy.get('code.wrap').should('have.text', "OK. Good answer");
    });
    it('Open Exercise 3', () => {
        openPage();
        // Open an exercise 3
        cy.get('.button').contains('Exercise 3 - Dropdown list').click();
        cy.get('h1.title').should('have.text', 'Exercise 3 - Dropdown list');
        // Get expected option and set it in dropdown
        cy.get('td').contains('In the following dropdown choose ').find('code')
            .then(element => {
                cy.get('select#s13').select(element.text());
                // Get expected result and compare with actual result
                cy.get('td').contains('Trail set to:').find('code')
                    .then((element) => {
                        cy.get('code.wrap').should('have.text', element.text());
                    });
            });
        // Click and check solution
        cy.get('button#solution').contains('Check solution').click();
        cy.get('code.wrap').should('have.text', "OK. Good answer");

    });

});



