
Cypress.Commands.add('checkout', (nome, sobrenome, pais, endereco, cidade, estado, cep, telefone, email, pagamento, termos) => {
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type(pais).type('{enter}')
    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_city').type(cidade)
    cy.get('#select2-billing_state-container').click()
    cy.get('.select2-search__field').type(estado).type('{enter}')
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
});

