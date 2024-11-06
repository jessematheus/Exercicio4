class deletHeroPage {
    selectorList() {
        const selectors = {
            trashButton: "[data-cy='trash']",
            confirmaDelet: ".bg-red-600"
        }
        return selectors
    }
    accessHeroPage(){
        cy.visit('http://localhost:3000/heroes')
    }
    deletHero() {
        cy.get(this.selectorList().trashButton).eq(9).click()
        cy.get(this.selectorList().confirmaDelet).click()
    }
}
export default deletHeroPage
