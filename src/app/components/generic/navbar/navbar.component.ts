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
  @Output() toggleLeftPanel = new EventEmitter<boolean>();
  @Output() gotoPage = new EventEmitter<String>();
  open:boolean = false;
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
    this.gotoPage.emit(pageName);
  }
  toggleLeftIcon() {
    this.open = !this.open;
    this.toggleLeftPanel.emit(this.open);
  }
}
