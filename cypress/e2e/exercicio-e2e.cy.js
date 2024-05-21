/// <reference types="cypress" />
import produtosPage from "../support/page-objects/produtos.page";

    describe('Funcionalidade: produtos', () => {

            beforeEach(() => {
                produtosPage.visitarUrl()
            });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    let qtd = 1
    produtosPage.buscarProduto('Abominable Hoodie')
    produtosPage.addProdutoCarrinho('XL', 'Red', qtd)

    produtosPage.buscarProduto('Augusta Pullover Jacket')
    produtosPage.addProdutoCarrinho('M', 'Orange', qtd)

    produtosPage.buscarProduto('Stellar Solar Jacket')
    produtosPage.addProdutoCarrinho('S', 'Blue', qtd)

    produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
    produtosPage.addProdutoCarrinho('L', 'Purple', qtd)

    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()

     cy.checkout('Samuel', 'Luis', 'Brasil', 'Rua quatorze de maio', 'Campinas', 'São Paulo', '17492100', '19986484471', 'samueluis@gmail.com') 
     cy.get('#terms').click()
     cy.get('#payment_method_cod').click()
     cy.get('#place_order').click()
     
     cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})
