import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MovieHeadingComponent } from './movie-heading/movie-heading.component';
import { MovieFactsComponent } from './movie-facts/movie-facts.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { MovieInfoComponentComponent } from './movie-info-component/movie-info-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    MovieHeadingComponent,
    MovieFactsComponent,
    MovieDescriptionComponent,
    MovieInfoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
