import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ImageViewerModule } from '../shared/components/image-viewer/image-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    ImageViewerModule,
  ],
  declarations: [ProjectsComponent, ProjectItemComponent, ProjectListComponent],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
