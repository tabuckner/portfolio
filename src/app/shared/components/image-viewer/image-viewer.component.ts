import { Component, OnInit } from '@angular/core';
import { ImageViewerService, ImageAction } from './image-viewer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  public subs = new Subscription();
  active = false;
  imageSrc: string;
  imageCaption: string;

  constructor(private imageModal: ImageViewerService) { }

  ngOnInit() {
    this.subs.add(
      this.imageModal.getImageActionListener().subscribe((newImageAction: ImageAction) => {
        this.imageActionHandler(newImageAction);
      })
    );
  }

  public imageActionHandler(imageAction: ImageAction) {
    const hasImageSrc = imageAction.imageData && imageAction.imageData.src;
    if (imageAction.imageAction === 'open' && hasImageSrc) {
      this.active = true;
      this.imageSrc = imageAction.imageData.src;
      // TODO: Add image captions?
    } else {
      this.active = false;
    }
  }

  public onCloseModal() {
    this.imageModal.close();
  }

}
