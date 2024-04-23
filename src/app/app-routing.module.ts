import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'dashboard',component: DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
