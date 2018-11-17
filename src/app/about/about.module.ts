import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { AboutBioComponent } from './about-bio/about-bio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent, AboutHeroComponent, AboutBioComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
