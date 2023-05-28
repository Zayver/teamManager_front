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
import { TeamVisualizerComponent } from "./team-visualizer.component"
import { MessageService } from "primeng/api"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { Team } from "../model/team"


describe("TeamVisualizerComponent", () => {
    const callMount = () => cy.mount(TeamVisualizerComponent, {
        providers: [
            MessageService
        ],
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
            InputTextModule,
            HttpClientModule,
            BrowserAnimationsModule
        ]
    })

    it("No teams in database", () => {
        cy.intercept({
            method: 'GET',
            url: "/team/all*"
        }, [])
        callMount()
        cy.get("div > p").should("have.text", "NO HAY EQUIPOSSSS")
    })

    it("Error connecting with server should display Error", () => {
        callMount()
        cy.get('.p-toast-message-content').should("be.visible")
    })

    it("Show teams should be correct", () => {
        cy.intercept({
            method: 'GET',
            url: "/team/all*"
        }, [
            { id: 1, name: "Team1", description: "Team1 D" },
            { id: 2, name: "Team2", description: "Team2 D" }
        ])

        callMount()

        cy.get(".container > p-card").should("be.visible")
    })

    it("Show dialog to join team", () => {
        cy.intercept({
            method: 'GET',
            url: "/team/all*"
        }, [
            { id: 1, name: "Team1", description: "Team1 D" },
            { id: 2, name: "Team2", description: "Team2 D" }
        ])

        callMount()

        cy.get('[ng-reflect-header="Team1#1"] > .p-card > .p-card-body > .p-card-footer > .p-element.ng-star-inserted > .p-ripple').click()
        cy.get('.p-dialog-header').should("be.visible")
    })

    it("Dialog button should be disabled by default", () => {
        cy.intercept({
            method: 'GET',
            url: "/team/all*"
        }, [
            { id: 1, name: "Team1", description: "Team1 D" },
            { id: 2, name: "Team2", description: "Team2 D" }
        ])

        callMount()

        cy.get('[ng-reflect-header="Team1#1"] > .p-card > .p-card-body > .p-card-footer > .p-element.ng-star-inserted > .p-ripple').click()
        cy.get('.content-container > p-button > button').should("be.disabled")
    })

    it("Dialog button should be disabled by default", () => {
        cy.intercept({
            method: 'GET',
            url: "/team/all*"
        }, [
            { id: 1, name: "Team1", description: "Team1 D" },
            { id: 2, name: "Team2", description: "Team2 D" }
        ])

        callMount()

        cy.get('[ng-reflect-header="Team1#1"] > .p-card > .p-card-body > .p-card-footer > .p-element.ng-star-inserted > .p-ripple').click()
        cy.get(".content-container > .p-inputtextarea").type("something")
        cy.get('.content-container > p-button.p-element > .p-ripple').should("not.be.disabled")
    })
})