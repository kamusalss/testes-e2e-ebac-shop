class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
     }

     buscarProduto(nomeProduto) {
      cy.get('.search').eq(0).type(nomeProduto)
      cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
     }

     addProdutoCarrinho(tamanho, cor, quantidade) {
      cy.get('.button-variable-item-' + tamanho).click()
      cy.get(`.button-variable-item-${cor}`).click()
      cy.get('.input-text').clear().type(quantidade)
      cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutosPage()