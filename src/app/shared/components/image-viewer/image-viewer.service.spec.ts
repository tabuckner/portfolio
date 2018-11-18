import { TestBed, inject } from '@angular/core/testing';

import { ImageViewerService } from './image-viewer.service';
import { ImageViewerModule } from './image-viewer.module';

describe('ImageViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImageViewerModule],
      providers: [ImageViewerService]
    });
  });

  it('should be created', inject([ImageViewerService], (service: ImageViewerService) => {
    expect(service).toBeTruthy();
  }));
});
