import { Component, Output, EventEmitter } from '@angular/core';
import { projectService } from '../../../services/project.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [projectService]
})

export class NavbarComponent {
  constructor(private project: projectService) {
  }
  @Output() gotoPage = new EventEmitter<String>();

  variableName:any = {};
  onclickBtn() {
    var parent = this;
    this.project.get_all_project(
      function (project:any){
        parent.variableName = project._body;
      }
    );
  }

  goto_page(pageName:String) {
    console.log("Inside goto_page");
    this.gotoPage.emit(pageName);
  }
}
