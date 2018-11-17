import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectsComponent, ProjectItemComponent, ProjectListComponent],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
