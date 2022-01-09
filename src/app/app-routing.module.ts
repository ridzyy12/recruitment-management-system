import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { RecruitmentDashboardComponent } from './recruitment-dashboard/recruitment-dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'recruitment-dashboard', component:RecruitmentDashboardComponent},
  {path: 'manager-dashboard', component:ManagerDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
