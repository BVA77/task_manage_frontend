import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  constructor() { }

  projects = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' }
  ];
  currentProject = null;
  isAddingOrEditingProject = false;

  onProjectAdded(project: string) {
    console.log('Project added:', project);
    const newProject = { id: this.projects.length + 1, name: project };
    this.projects.push(newProject);
    this.isAddingOrEditingProject = false;
  }

  deleteProject(projectId: number) {
    this.projects = this.projects.filter(project => project.id !== projectId);
  }

  editProject(project: any) {
    console.log('Editing project:', project);
    this.currentProject = project;
    this.isAddingOrEditingProject = true;
  }

  onProjectUpdated(updatedProject: { id: number; name: string }) {
    console.log('Project updated:', updatedProject);
    const index = this.projects.findIndex(p => p.id === updatedProject.id);
    if (index !== -1) {
      this.projects[index].name = updatedProject.name;
    }
    this.isAddingOrEditingProject = false;
    this.currentProject = null;
  }

}
