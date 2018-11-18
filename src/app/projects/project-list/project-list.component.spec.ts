import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListComponent } from './project-list.component';
import { PORTFOLIO_PROJECTS } from '../projects';
import { ProjectItemComponent } from '../project-item/project-item.component';
import { ImageViewerService } from 'src/app/shared/components/image-viewer/image-viewer.service';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ImageViewerService],
      declarations: [ ProjectListComponent, ProjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.projects = PORTFOLIO_PROJECTS;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
