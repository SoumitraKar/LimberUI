import { Component } from '@angular/core';
import { projectService } from '../../services/project.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [projectService]
})

export class ProjectComponent {
  constructor(private projectService: projectService, private modalService: NgbModal) {
    this.get_project_details_by_user ("59bfc108e233431e28526831");
  }
  userId:string = "59bfbf8c5854da09bcee77c8";
  projectId:string = "59bfc0490bbdab1c1ceb2bd1";
  projects:any = [];
  projectToEdit:any = {};
  get_project_details_by_user(user_id:string) {
    console.log("QQQQQQQQQQQQQQQQ")
    var parent = this;
    this.projectService.get_project_details_by_user(user_id,
      function (project:any){
        parent.projects = JSON.parse(project._body);
      }
    );
  }
  get_project_details_by_id(id:string) {
    var parent = this;
    this.projectService.get_project_details_by_id(id,
      function (project:any){
        parent.projects = JSON.parse(project._body);
      }
    );
  }
  add_user_to_project(user_id:string, project_id:string) {
    var parent = this;
    var changedProject;
    this.projectService.add_user_to_project(user_id, project_id,
      function (project:any){
        // parent.projects = JSON.parse(project._body);
        changedProject = JSON.parse(project._body);
        for (let key in parent.projects) {
          if( parent.projects[key]._id == changedProject._id) {
            parent.projects[key] = changedProject;
            parent.projectToEdit = changedProject;
            return;
          }
        }
      }
    );
  }
  remove_user_from_project(user_id:string, project_id:string) {
    var parent = this;
    var changedProject;
    this.projectService.remove_user_from_project(user_id, project_id,
      function (project:any){
        // parent.projects = JSON.parse(project._body);
        changedProject = JSON.parse(project._body);
        for (let key in parent.projects) {
          if( parent.projects[key]._id == changedProject._id) {
            parent.projects[key] = changedProject;
            parent.projectToEdit = changedProject;
            return;
          }
        }
      }
    );
  }

  // Modal Code Start
closeResult: string;
open(project:any, content:any) {
  this.projectToEdit = project;
  this.modalService.open(content).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
// Modal Code Ends
}
