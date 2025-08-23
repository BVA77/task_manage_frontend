import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { ProjectModule } from '../project/project.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    ProjectModule
  ]
})
export class DashboardModule { }
