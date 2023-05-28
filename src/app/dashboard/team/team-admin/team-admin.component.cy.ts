import { HttpClientModule } from "@angular/common/http"
import { TeamAdminComponent } from "./team-admin.component"
import { CommonModule } from "@angular/common"
import { ButtonModule } from "primeng/button"
import { DialogModule } from "primeng/dialog"
import { DividerModule } from "primeng/divider"
import { MenubarModule } from "primeng/menubar"
import { ToastModule } from "primeng/toast"
import { DashboardRoutingModule } from "../../dashboard-routing.module"
import { MessageService } from "primeng/api"
import { CardModule } from "primeng/card"
import { TeamService } from "../service/team.service"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"


describe("TeamAdminComponent", () => {

    const callMount = () => cy.mount(TeamAdminComponent, {
        providers: [MessageService, TeamService],
        imports: [
            CommonModule,
            DashboardRoutingModule,
            MenubarModule,
            ButtonModule,
            ToastModule,
            DialogModule,
            DividerModule,
            HttpClientModule,
            CardModule,
            BrowserAnimationsModule
        ]
    })

    it("Should show 0 when no teams exist", () => {
        cy.intercept({
            method: "GET",
            url: "/user/teams*"
        },[])
        callMount()
        cy.get('.p-card-subtitle').should("contain.text", "0")
    })

    it("Should show teams", ()=>{
        cy.intercept({
            method: "GET",
            url: "/user/teams*"
        },[
            {id: 1, name: "Team1", description: "team1 D"},
            {id: 2, name: "Team2", description: "team2 D"},
            {id: 3, name: "Team3", description: "team3 D"}
        ])
        callMount()
        cy.get("p-card").find(".team-container").should("have.length", 3)
    })


})