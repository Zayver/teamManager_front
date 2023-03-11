import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: "login", pathMatch: 'full'},
  {path: "login", loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)},
  {path: "signup", loadChildren: ()=> import('./signup/signup.module').then(m => m.SignupModule)},
  {path: "dashboard", loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: '**', loadChildren: ()=> import('./notfound/notfound.module').then(m => m.NotfoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
