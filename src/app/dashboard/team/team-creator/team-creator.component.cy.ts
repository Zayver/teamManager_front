import { CommonModule } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"
import { AvatarModule } from "primeng/avatar"
import { ButtonModule } from "primeng/button"
import { CardModule } from "primeng/card"
import { DialogModule } from "primeng/dialog"
import { DividerModule } from "primeng/divider"
import { InputTextModule } from "primeng/inputtext"
import { InputTextareaModule } from "primeng/inputtextarea"
import { MessageModule } from "primeng/message"
import { ToastModule } from "primeng/toast"
import { TeamRoutingModule } from "../team-routing.module"
import { TeamCreatorComponent } from "./team-creator.component"
import { MessageService } from "primeng/api"

describe("TeamCreatorComponent", () => {
    beforeEach(() => {
        cy.mount(TeamCreatorComponent, {
            imports: [
                CommonModule,
                TeamRoutingModule,
                CardModule,
                ButtonModule,
                HttpClientModule,
                FormsModule,
                InputTextareaModule,
                MessageModule,
                ToastModule,
                DividerModule,
                DialogModule,
                AvatarModule,
                InputTextModule
            ],
            providers: [MessageService]
        })
    })
    it("Send button should be disabled by default", () => {
        cy.get('p-button > button').should("be.disabled")
    })

    it("Fields must be empty by default", ()=>{
        cy.get('.p-inputgroup > .p-inputtext').should("not.have.text")
        cy.get('.p-inputtextarea').should("not.have.text")
    })

    it("Writing a name and deleting it should display an error", ()=>{
        cy.get('.p-inputgroup > .p-inputtext').type("hola").clear()
        cy.get('[text="Debes colocar un nombre"] > .p-inline-message').should("be.visible")
    })

    it("Writing a description and deleting it should display an error", ()=>{
        cy.get('.p-inputtextarea').type("something in this soemthing").clear()
        cy.get('[text="Debes colocar una descripción"] > .p-inline-message').should("be.visible")
    })

    it("correct input should activate the button", ()=>{
        cy.get('.p-inputgroup > .p-inputtext').type("This is a real team name")
        cy.get('.p-inputtextarea').type("This is a very real team description that produces me enjoy")
        cy.get('p-button > button').should("not.be.disabled")
    })
})