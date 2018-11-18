import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// https://www.npmjs.com/package/@fortawesome/angular-fontawesome#using-the-icon-library
// Create an FA Module and use throughout app. (library.add(<icon>))

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { NavItemsService } from './shared/nav-items.service';
import { ImageViewerModule } from './shared/components/image-viewer/image-viewer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    LayoutModule,
    HomeModule,
    AboutModule,
    ProjectsModule,
    ContactModule,
    ImageViewerModule
  ],
  providers: [NavItemsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
