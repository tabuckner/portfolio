import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHeadComponent } from './hero-head.component';

describe('HeroHeadComponent', () => {
  let component: HeroHeadComponent;
  let fixture: ComponentFixture<HeroHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
