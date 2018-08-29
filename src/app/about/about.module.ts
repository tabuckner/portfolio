import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutHeroComponent } from './about-hero/about-hero.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent, AboutHeroComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
