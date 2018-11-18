import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemComponent } from './project-item.component';
import { ImageViewerModule } from 'src/app/shared/components/image-viewer/image-viewer.module';
import { PORTFOLIO_PROJECTS } from '../projects';

describe('ProjectItemComponent', () => {
  let component: ProjectItemComponent;
  let fixture: ComponentFixture<ProjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ImageViewerModule],
      declarations: [ ProjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemComponent);
    component = fixture.componentInstance;
    component.project = PORTFOLIO_PROJECTS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
