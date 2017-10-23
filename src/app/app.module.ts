import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/generic/navbar/navbar.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  imports:      [ FormsModule, BrowserModule, HttpModule, NgbModule.forRoot()],
  declarations: [ AppComponent, NavbarComponent, ProjectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
