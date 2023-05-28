import { MessageService } from "primeng/api"
import { MainComponent } from "./main.component"
import { CommonModule } from "@angular/common"
import { ButtonModule } from "primeng/button"
import { DialogModule } from "primeng/dialog"
import { DividerModule } from "primeng/divider"
import { MenubarModule } from "primeng/menubar"
import { ToastModule } from "primeng/toast"
import { DashboardRoutingModule } from "../dashboard-routing.module"
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AuthService } from "src/app/shared/service/auth.service"
import { User } from "src/app/shared/model/user"
import { BehaviorSubject } from "rxjs"
import { MockProvider } from "ng-mocks"
import { AuthenticationResponse } from "src/app/shared/model/auth/authentication.response"

describe("MainComponent", () => {
    const auth = new AuthenticationResponse()
        auth.email = "tester@email.com"
        auth.id = 1
        auth.token = "1234"
        auth.username = "tester"
    const mockAuthService = MockProvider(AuthService, {
        isLoggedIn: true,
        isLogged: new BehaviorSubject(auth),
        currentUserValue: auth
    })    
    
    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: "/invitation/get*"
        }, []).as("invitations")

        cy.mount(MainComponent, {
            providers: [MessageService, mockAuthService
            ],
            imports: [CommonModule,
                DashboardRoutingModule,
                MenubarModule,
                ButtonModule,
                ToastModule,
                DialogModule,
                DividerModule,
                HttpClientModule,
                BrowserAnimationsModule
            ]
        })
            
    })


    it("Invitations should show 0", () => {
        cy.get('.p-badge').should("have.text", "0")
    })

    it("Click invitations should show dialog", ()=>{
        cy.get('[label="Invitaciones"] > .p-ripple').click()
        cy.get('.ng-trigger').should("be.visible")
    })

    it("Should close dialog", ()=>{
        cy.get('[label="Invitaciones"] > .p-ripple').click()
        cy.get('.p-dialog-header-close-icon').click()
        cy.get('.ng-trigger').should("not.exist")
    })
})