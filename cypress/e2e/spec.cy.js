context('GET  api/music/', () => {
  it('Performs GET request', () => {
    cy.request("GET", "http://127.0.0.1:8000/api/music/").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).length.to.be.greaterThan(1)
      cy.wrap(response.body[response.body.length - 1]) // value would need to change dependong on the amount of songs added
      .should('deep.include', {
        title: 'test'
        //optionally add other fields/a field to look for as confirmation
      })
      
    })
  })
})