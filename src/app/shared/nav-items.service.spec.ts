import { TestBed, inject } from '@angular/core/testing';

import { NavItemsService } from './nav-items.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
      providers: [NavItemsService]
    });
  });

  it('should be created', inject([NavItemsService], (service: NavItemsService) => {
    expect(service).toBeTruthy();
  }));
});
