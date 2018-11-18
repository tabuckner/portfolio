import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface ImageData {
  src: string;
  caption: string;
}

export interface ImageAction {
  imageAction: string;
  imageData?: ImageData;
}

@Injectable()
export class ImageViewerService {
  imageSrc: string;
  imageCaption: string;
  imageActionListener = new Subject<ImageAction>();

  constructor() { }

  getImageActionListener(): Observable<any> {
    return this.imageActionListener.asObservable();
  }

  open(imageData: ImageData) {
    const imageAction = 'open';
    this.imageSrc = imageData.src;
    this.imageCaption = imageData.caption;
    this.imageActionListener.next({ imageAction, imageData });
  }

  close() {
    const imageAction = 'close';
    this.imageActionListener.next({ imageAction });
  }
}
