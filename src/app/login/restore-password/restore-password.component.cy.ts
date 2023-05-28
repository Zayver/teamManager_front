import { mount } from "cypress/angular"
import { RestorePasswordComponent } from "./restore-password.component"
import { MessageService } from "primeng/api"
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"
import { ButtonModule } from "primeng/button"
import { InputTextModule } from "primeng/inputtext"
import { MessageModule } from "primeng/message"
import { CardModule } from "primeng/card"



describe("RestorePasswordComponent", ()=>{
    beforeEach(()=>{
        mount(RestorePasswordComponent, {
            providers:[MessageService],
            imports: [FormsModule, ButtonModule, InputTextModule, MessageModule, HttpClientModule, CardModule]
        })
    })

    it("Send button should be disabled by default", ()=>{
        cy.get("p-button > button").should("be.disabled")
    })

    it("Email should be accepted", ()=>{
        cy.get("#email").type("something@email.com")
        cy.get("p-button > button").should("be.enabled")
    })

    it("Invalid email should be rejected", ()=>{
        cy.get("#email").type("something")
        cy.get("p-button > button").should("be.disabled")
    })

    it("Invalid email should show message", ()=>{
        cy.get("#email").type("something")
        cy.get('.p-inline-message').should("be.visible")
    })

    it("At default not error message should be shown", ()=>{
        cy.get('.p-inline-message').should("not.be.visible")
    })




})