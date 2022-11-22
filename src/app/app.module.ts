import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const appRoutes: Routes = [
  { path: 'carousel', component: CarouselHolderComponent }
];

@NgModule({
  imports:[ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule, CarouselModule ],
  declarations: [ AppComponent, HelloComponent, CarouselHolderComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
