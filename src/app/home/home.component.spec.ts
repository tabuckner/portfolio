import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeroHeadComponent } from './hero-head/hero-head.component';
import { HeroBodyComponent } from './hero-body/hero-body.component';
import { HeroFootComponent } from './hero-foot/hero-foot.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavItemsService } from '../shared/nav-items.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HeroHeadComponent,
        HeroBodyComponent,
        HeroFootComponent
      ],
      imports: [RouterTestingModule],
      providers: [NavItemsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
