import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeroHeadComponent } from './hero-head/hero-head.component';
import { HeroBodyComponent } from './hero-body/hero-body.component';
import { HeroFootComponent } from './hero-foot/hero-foot.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    HeroHeadComponent,
    HeroBodyComponent,
    HeroFootComponent,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
