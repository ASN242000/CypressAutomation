/// <reference types="Cypress" />

describe('My first test suite', function(){
    it('My first test case', function(){
        //test step

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        //Parent child chaining
        cy.get('.products').find('.product').should('have.length',4)
        //eq will be used for index, contains will search for the text in that particular locator
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        //Without using index
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
    })

} )