import userData from '../fixtures/users/userData.json'

class LoginPage{
    selectorList(){
        const selectors={
            loginButton:'li > .undefined',
            userNameField:'[data-cy="email"]',
            passwordField:'[data-cy="password"]',
            submitButton:'.text-white'
        }
        return selectors
    }
    accessLoginPage(){
        cy.visit('http://localhost:3000/heroes')
    }
    loginWithUser(username,password){
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().userNameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().submitButton).click()
    }
}
export default LoginPage
