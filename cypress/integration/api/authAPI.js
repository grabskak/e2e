describe("Login Page2", () =>  {
  
    before(() => {  
     
      })
  
      it("bad login", ()=> {
        cy.intercept("POST","https://aden-pricetag-platform.azurewebsites.net/api/User/Login").as("requestLogin")  
        cy.visit('/');  
        cy.login("bademail@test.pl","12345")
        cy.wait("@requestLogin")
        cy.get("@requestLogin").then(res =>{
            console.log(res)
            expect(res.response.statusCode).to.equal(400)
        }) 
      })


      it("ok login", ()=> {
        cy.intercept("POST","https://aden-pricetag-platform.azurewebsites.net/api/User/Login").as("requestLogin")  
        cy.visit('/'); 
        cy.fixture("example").then(data =>{ 
        cy.login(data.email,data.password)
        })
        cy.wait("@requestLogin")
        cy.get("@requestLogin").then(res =>{
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
        }) 
      })

  })



