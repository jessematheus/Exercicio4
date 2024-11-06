const Chance = require('chance')

var chance = new Chance()

class creatHeroPage{
    selectorList(){
        const selectors={
     creatButton:"[href='/heroes/new']",
     nameField:"[data-cy='nameInput']",
     precoField:"[data-cy='priceInput']",
     fansField:"[data-cy='fansInput']",
     saveField:"[data-cy='savesInput']",
     poderField:"[data-cy='powersSelect']",
     submitHeroButton:"button"
        }
        return selectors
    }
    creatHero(){
    cy.get(this.selectorList().creatButton).click()
    cy.get(this.selectorList().nameField).type(chance.first())
    cy.get(this.selectorList().precoField).type(chance.string({length:5, numeric:true}))
    cy.get(this.selectorList().fansField).type(chance.string({length:5, numeric:true}))
    cy.get(this.selectorList().saveField).type(chance.string({length:5, numeric:true}))
    cy.get(this.selectorList().poderField)
        .select(['Flying','Fireball'])
    cy.get(this.selectorList().submitHeroButton).eq(2).click()

    }
}
export default creatHeroPage
