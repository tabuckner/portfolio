import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ImageViewerService, ImageData } from 'src/app/shared/components/image-viewer/image-viewer.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;

  constructor(private imageModal: ImageViewerService) { }

  ngOnInit() {
  }

  onClickImage() {
    const src = this.project.image;
    const caption = this.project.name;
    const imageData: ImageData = { src, caption };
    this.imageModal.open(imageData);
  }

}
