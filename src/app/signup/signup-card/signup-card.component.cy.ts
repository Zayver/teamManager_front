import { mount } from "cypress/angular"
import { SignupCardComponent } from "./signup-card.component"
import { MessageService } from "primeng/api"
import { CardModule } from "primeng/card"
import { ButtonModule } from "primeng/button"
import { InputTextModule } from "primeng/inputtext"
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"
import { PasswordModule } from "primeng/password"
import { MessageModule } from "primeng/message"


describe("SignupCardComponent", () => {
    beforeEach(() => {
        mount(SignupCardComponent, {
            providers: [MessageService],
            imports: [HttpClientModule, FormsModule,
                CardModule, ButtonModule, InputTextModule, PasswordModule, MessageModule]
        })
    })

    it("Send button shuld be disabled by default", () => {
        cy.get('p-button > button').should("be.disabled")
    })

    it("Fields should be empty by default", () => {
        cy.get("#email").should("not.have.text")
        cy.get("#username").should("not.have.text")
        cy.get("#password").should("not.have.text")
    })

    it("If invalid email should show error message", ()=>{
        cy.get("#email").type("something")
        cy.get(':nth-child(1) > p-message.p-element > .p-inline-message').should("be.visible")
    })

    it("If invalid username should show error message", ()=>{
        cy.get("#username").type("something  dasdssa")
        cy.get(':nth-child(2) > p-message.p-element > .p-inline-message').should("be.visible")
    })

    it("If invalid password should show error message", ()=>{
        cy.get("#password").type("1234")
        cy.get(':nth-child(3) > p-message.p-element > .p-inline-message').should("be.visible")
    })

    it("If all good button shuld be enabled", ()=>{
        cy.get("#email").type("something@email.com")
        cy.get("#username").type("something")
        cy.get("#password").type("123456789Aa")
        cy.get('p-button > button').should("be.enabled")
    })
})