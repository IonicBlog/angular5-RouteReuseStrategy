import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { SimpleReuseStrategy } from './provider/SimpleReuseStrategy';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app.routing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { NewsNavComponent } from './news-nav/news-nav.component';

export const Components = [
  HomeComponent,
  NewsComponent,
  AboutComponent,
  ContactComponent
]

@NgModule({
  declarations: [
    AppComponent,
    Components,
    NewsNavComponent
  ],
  imports: [
    HttpModule,
    BrowserModule, AppRoutingModule
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
