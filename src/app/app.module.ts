import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import { storyBoardComponent }  from './components/storyBoard/storyBoard.component';
import { NavbarComponent } from './components/generic/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [ AppComponent, NavbarComponent, HomeComponent, storyBoardComponent ],
  imports:      [
    FormsModule,
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path : 'home',
        component : HomeComponent
      },
      {
        path : 'storyBoard',
        component : storyBoardComponent
      }
    ])
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
