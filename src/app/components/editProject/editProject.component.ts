import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent }  from '../../app.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { projectService } from '../../services/project.service';

@Component({
    selector: 'app-edit-project',
    templateUrl: './editProject.component.html',
    styleUrls: ['./editProject.component.css']
  })

export class EditProject {
  @Input() projectToEdit: any;
  @Output() closePage = new EventEmitter<string>();
  constructor(private projectService: projectService){}

  add_user_to_project(user_id:String, project_id:String) {
    var parent = this;
    var changedProject;
    this.projectService.add_user_to_project(user_id, project_id,
      function (project:any){
        // parent.projects = JSON.parse(project._body);
        changedProject = JSON.parse(project._body);
        parent.projectToEdit = changedProject;
      }
    );
  }

  remove_user_from_project(user_id:String, project_id:String) {
    var parent = this;
    var changedProject;
    this.projectService.remove_user_from_project(user_id, project_id,
      function (project:any){
        // parent.projects = JSON.parse(project._body);
        changedProject = JSON.parse(project._body);
        parent.projectToEdit = changedProject;
      }
    );
  }

  editProject() {
    this.closePage.emit('Close click');
  }
  closeProject() {
    this.closePage.emit('Close click');
  }
}
