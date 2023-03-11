import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCardComponent } from './login-card/login-card.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginCardComponent},
  {path: 'restore_password', component: RestorePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
