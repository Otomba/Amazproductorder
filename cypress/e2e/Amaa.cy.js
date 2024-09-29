describe("Amazon Website",()=>
    {
    it("Amazoon",()=>
        {
        cy.visit('https://www.amazon.com/'); //  Scenario 1. Navigate to ○	Navigate to website.
        cy.title().should('include', 'Amazon'); // Assert element "Amazon"
        cy.get('#nav-search-bar-form').type('bags'); // Scenario 2.Search for a specific product.
        cy.get('#nav-search-submit-button').click();
        cy.wait(6000);                                   // Wait for Page to load
        cy.get('.a-button-text').contains('Add to cart');
        cy.get('#a-autoid-1-announce').click(); // Scenario 3.Add item to Cart
        cy.get('.nav-cart-icon.nav-sprite').click({force:true});
        cy.get('#nav-cart').click();
        cy.get('input[name="proceedToRetailCheckout"]').click(); // Scenario 4 Sign-In to Account. Proceed to checkout
        cy.get('input[name="type"]').type('otombraxton@gmail.com'); // Scenario 5. Input email
        cy.get('input[name="type"]').click();                // Scenario 6.Input valid email
        cy.get('input[name="type"]').type("T1m1lehin@123"); // Scenario 7. Input valid Password
        cy.get('#signInSubmit').click();

    })
})