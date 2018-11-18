import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer.component';
import { ImageViewerService } from './image-viewer.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageViewerComponent],
  providers: [ImageViewerService],
  exports: [ImageViewerComponent]
})
export class ImageViewerModule { }
