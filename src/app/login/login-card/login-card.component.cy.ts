import { HttpClient, HttpClientModule } from "@angular/common/http";
import { LoginCardComponent } from "./login-card.component";
import { MessageService } from "primeng/api";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

describe("LoginCardComponent", ()=>{

    beforeEach(()=>{
        cy.mount(LoginCardComponent, {
            providers:[MessageService],
            imports: [HttpClientModule, FormsModule, ButtonModule, InputTextModule]
        })
    })

    it("Login button should be deactivated by default", ()=>{
        cy.get('form > p-button > button').should("be.disabled")
    })

    it("Login field should be empty by default", ()=>{
        cy.get(':nth-child(1) > .p-inputtext').should("not.have.text")
        cy.get(':nth-child(2) > .p-inputtext').should("not.have.text")
    })

    it("Login Button should activate with valid fields", ()=>{
        cy.get(':nth-child(1) > .p-inputtext').type("admin")
        cy.get(':nth-child(2) > .p-inputtext').type("1234")

        cy.get('form > p-button > button').should("be.enabled")
    })
})


