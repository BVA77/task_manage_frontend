import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit, OnDestroy {
  constructor() { }
  @Input() project: any;
  @Output() projectAdded = new EventEmitter<string>();
  @Output() projectUpdated = new EventEmitter<{ id: number; name: string }>();
  @Output() cancel = new EventEmitter<void>();
  projectName: string = '';

  ngOnInit() {
    if (this.project) {
      this.projectName = this.project.name;
    }
  }

  ngOnDestroy() {
    this.projectName = '';
  }

  addProject() {
    if (this.projectName.trim()) {
      // Logic to add the project
      this.projectAdded.emit(this.projectName);
    }
  }

  updateProject() {
    if (this.project && this.projectName.trim()) {
      this.projectUpdated.emit({ id: this.project.id, name: this.projectName });
    }
  }

}
