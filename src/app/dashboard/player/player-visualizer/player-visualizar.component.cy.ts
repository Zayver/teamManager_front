import { CommonModule } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"
import { AvatarModule } from "primeng/avatar"
import { ButtonModule } from "primeng/button"
import { CardModule } from "primeng/card"
import { DialogModule } from "primeng/dialog"
import { DividerModule } from "primeng/divider"
import { DropdownModule } from "primeng/dropdown"
import { InputTextareaModule } from "primeng/inputtextarea"
import { ToastModule } from "primeng/toast"
import { PlayerRoutingModule } from "../player-routing.module"
import { PlayerVisualizerComponent } from "./player-visualizer.component"
import { MessageService } from "primeng/api"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

describe("PlayerVisualizerComponent", () => {

    const hexToRgb = (hex: string) => {
        const rValue = parseInt(hex.substring(0, 2), 16);
        const gValue = parseInt(hex.substring(2, 4), 16);
        const bValue = parseInt(hex.substring(4), 16);
        return `rgb(${rValue}, ${gValue}, ${bValue})`;
    }
    const callMount = () => cy.mount(PlayerVisualizerComponent, {
        imports: [
            CommonModule,
            PlayerRoutingModule,
            DividerModule,
            ButtonModule,
            CardModule,
            AvatarModule,
            HttpClientModule,
            ToastModule,
            DialogModule,
            DropdownModule,
            FormsModule,
            InputTextareaModule,
            HttpClientModule,
            BrowserAnimationsModule
        ],
        providers: [MessageService]
    })

    it("Should display 0 when no users", () => {
        cy.intercept({
            method: "GET",
            url: "/user/all*" // /user/teams
        }, [])
        cy.intercept({
            method: "GET",
            url: "/user/teams*" // /user/teams
        }, [])
        callMount()
        cy.get('.p-card-subtitle').should("contain.text", "0")
    })

    it("Should display users", () => {
        cy.intercept({
            method: "GET",
            url: "/user/all*" // /user/teams
        }, [{ id: 1, username: "User1", email: "user1@email.com" },
        { id: 2, username: "User2", email: "user2@email.com" },
        { id: 3, username: "User3", email: "user3@email.com" },
        { id: 4, username: "User4", email: "user4@email.com" }])
        cy.intercept({
            method: "GET",
            url: "/user/teams*" // /user/teams
        }, [

        ])
        callMount()
        cy.get("p-card").find(".wrapper-player").should("have.length", 4)
    })

    it("Should show invitations overlay", () => {
        cy.intercept({
            method: "GET",
            url: "/user/all*" // /user/teams
        }, [{ id: 1, username: "User1", email: "user1@email.com" },
        { id: 2, username: "User2", email: "user2@email.com" },
        { id: 3, username: "User3", email: "user3@email.com" },
        { id: 4, username: "User4", email: "user4@email.com" }])
        cy.intercept({
            method: "GET",
            url: "/user/teams*" // /user/teams
        }, [

        ])
        callMount()
        cy.get(':nth-child(2) > .player-container > p-button.p-element > .p-ripple').click()
        cy.get('.ng-trigger').should("be.visible")
    })

    it("Should show invitations overlay", () => {
        cy.intercept({
            method: "GET",
            url: "/user/all*" // /user/teams
        }, [{ id: 1, username: "User1", email: "user1@email.com" },
        { id: 2, username: "User2", email: "user2@email.com" },
        { id: 3, username: "User3", email: "user3@email.com" },
        { id: 4, username: "User4", email: "user4@email.com" }])
        cy.intercept({
            method: "GET",
            url: "/user/teams*" // /user/teams
        }, [

        ])
        callMount()
        cy.get(':nth-child(2) > .player-container > p-button.p-element > .p-ripple').click()
        cy.get('.p-dropdown-label').click()
        cy.get('.p-dropdown-empty-message').should("contain.text", "No results found")
    })

    it("Should show all user teams", () => {
        cy.intercept({
            method: "GET",
            url: "/user/all*" // /user/teams
        }, [{ id: 1, username: "User1", email: "user1@email.com" },
        { id: 2, username: "User2", email: "user2@email.com" },
        { id: 3, username: "User3", email: "user3@email.com" },
        { id: 4, username: "User4", email: "user4@email.com" }])
        cy.intercept({
            method: "GET",
            url: "/user/teams*" // /user/teams
        }, [
            { id: 1, name: "team1", description: "Description1" },
            { id: 2, name: "team2", description: "Description2" }
        ])
        callMount()
        cy.get(':nth-child(2) > .player-container > p-button.p-element > .p-ripple').click()
        cy.get('.p-dropdown-label').click()
        cy.get('.p-dropdown-panel').find("p-dropdownitem").should("have.length", 2)
    })

    it("Overlay button should be disabled by default", () => {

        cy.intercept({
            method: "GET",
            url: "/user/all*" // /user/teams
        }, [{ id: 1, username: "User1", email: "user1@email.com" },
        { id: 2, username: "User2", email: "user2@email.com" },
        { id: 3, username: "User3", email: "user3@email.com" },
        { id: 4, username: "User4", email: "user4@email.com" }])
        cy.intercept({
            method: "GET",
            url: "/user/teams*" // /user/teams
        }, [
            { id: 1, name: "team1", description: "Description1" },
            { id: 2, name: "team2", description: "Description2" }
        ])
        callMount()
        cy.get(':nth-child(2) > .player-container > p-button.p-element > .p-ripple').click()
        cy.get("form > p-button > button").should("be.disabled")

    })

    it("Writing and deleting all from description should turn the border red", () => {

        cy.intercept({
            method: "GET",
            url: "/user/all*" // /user/teams
        }, [{ id: 1, username: "User1", email: "user1@email.com" },
        { id: 2, username: "User2", email: "user2@email.com" },
        { id: 3, username: "User3", email: "user3@email.com" },
        { id: 4, username: "User4", email: "user4@email.com" }])
        cy.intercept({
            method: "GET",
            url: "/user/teams*" // /user/teams
        }, [
            { id: 1, name: "team1", description: "Description1" },
            { id: 2, name: "team2", description: "Description2" }
        ])
        callMount()
        cy.get(':nth-child(2) > .player-container > p-button.p-element > .p-ripple').click()

        cy.get('.p-inputtextarea').type("This is something i would never write")
            .clear().should('have.css', 'border-color', "rgb(239, 154, 154)");

    })

    it("Correct Information should enable button", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            //IGNORING EXCEPTION DUE TO PRIMENG BUG WITH CYPRESS
            return false
        })

        cy.intercept({
            method: "GET",
            url: "/user/all*" // /user/teams
        }, [{ id: 1, username: "User1", email: "user1@email.com" },
        { id: 2, username: "User2", email: "user2@email.com" },
        { id: 3, username: "User3", email: "user3@email.com" },
        { id: 4, username: "User4", email: "user4@email.com" }])
        cy.intercept({
            method: "GET",
            url: "/user/teams*" // /user/teams
        }, [
            { id: 1, name: "team1", description: "Description1" },
            { id: 2, name: "team2", description: "Description2" }
        ])
        callMount()
        cy.get(':nth-child(2) > .player-container > p-button.p-element > .p-ripple').click()
        cy.get('.p-dropdown-trigger').click()
        cy.get('p-dropdownitem').find("span:contains('team1')").click()

        cy.get('.p-inputtextarea').type("This is something i would never write")
        cy.get("form > p-button > button").should("not.be.disabled")
    })
})

