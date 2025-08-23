import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectModule { }
