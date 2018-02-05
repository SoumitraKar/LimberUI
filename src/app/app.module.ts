import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { Ng2DragDropModule } from 'ng2-drag-drop';

import { AppComponent }  from './app.component';
import { storyBoardComponent }  from './components/storyBoard/storyBoard.component';
import { storyPageComponent }  from './components/storyPage/storyPage.component';
import { NavbarComponent } from './components/generic/navbar/navbar.component';
import { LeftMenuComponent } from './components/generic/leftMenu/leftMenu.component';
import { dropDownFormComponent } from './components/generic/dropDownForm/dropDownForm.component';
import { HomeComponent } from './components/home/home.component';
import { AddProject } from './components/addProject/addProject.component';
import { EditProject } from './components/editProject/editProject.component';
import { sunBurnStoryComponent } from './components/sunBurnStoryChart/sunBurnStoryChart.component';

@NgModule({
  declarations: [ AppComponent, NavbarComponent, LeftMenuComponent, dropDownFormComponent, HomeComponent, AddProject, EditProject, storyPageComponent, storyBoardComponent, sunBurnStoryComponent ],
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
      },{
        path : 'storyPage/:story_id',
        component : storyPageComponent
      }
    ])
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
