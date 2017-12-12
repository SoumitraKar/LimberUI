import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { Ng2DragDropModule } from 'ng2-drag-drop';

import { AppComponent }  from './app.component';
import { storyBoardComponent }  from './components/storyBoard/storyBoard.component';
import { NavbarComponent } from './components/generic/navbar/navbar.component';
import { LeftMenuComponent } from './components/generic/leftMenu/leftMenu.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [ AppComponent, NavbarComponent, LeftMenuComponent, HomeComponent, storyBoardComponent ],
  imports:      [
    FormsModule,
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    Ng2DragDropModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home', 
        pathMatch: 'full'
      },{
        path : 'home',
        component : HomeComponent
      },{
        path : 'storyBoard/:project_id',
        component : storyBoardComponent
      }
    ])
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
