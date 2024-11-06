import LoginPage from '../pages/loginPage.js'
import creatHeroPage from '../pages/creatHeroPage.js'
import deletHeroPage from '../pages/deletHeroPage.js'
import userData from '../fixtures/users/userData.json'

const loginPage = new LoginPage()
const heroPage = new creatHeroPage()
const deletHero = new deletHeroPage()


describe('template spec', () => {

  it('passes', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    heroPage.creatHero()
    deletHero.deletHero()

      

  })
 
})
