import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PicturesComponent } from './pictures/pictures.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateeditComponent } from './createedit/createedit.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    NavbarComponent,
    PicturesComponent,
    HomeComponent,
    CreateeditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
