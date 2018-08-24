import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFootComponent } from './hero-foot.component';

describe('HeroFootComponent', () => {
  let component: HeroFootComponent;
  let fixture: ComponentFixture<HeroFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
