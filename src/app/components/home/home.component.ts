import { Component, ComponentRef, ElementRef } from '@angular/core';
import { projectService } from '../../services/project.service';
import { storyService } from '../../services/story.service';

import { AppComponent }  from '../../app.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [projectService, storyService]
})

export class HomeComponent {
  constructor(private projectService: projectService, private storyService: storyService, private modalService: NgbModal,
  private _appComponent: AppComponent) {
    var parent = this;
      this.userId = this._appComponent.get_userId();
      this.get_project_details_by_user();
      // this.get_story_by_assignee (this.userId);

      this.get_story_by_assignee();
  }
  userId:String = "5a01bfa0dfad2b2b74dea825";
  projectId:String = "";
  projects:any = [];
  pejs:any;
  stories:any = [];
  projectToEdit:any = {};
  set_bar_color (per:number) {
    let styles = {
      'background-color': (per < 40) ? '#d9534f' : (per < 70) ? '#31b0d5' : '#5cb85c'
    };
    return styles;
  }
  get_story_by_assignee() {
    var parent = this;
    this.storyService.get_story_by_assignee(parent.userId,
      function (stories:any){
        console.log("ggggggggggggggggggggg");
        // console.log(this.userId);
        console.log(stories._body);
        parent.stories = JSON.parse(stories._body);
      }
    );
  }

  get_project_details_by_user () {
    var parent = this;
    this.projectService.get_project_details_by_user(this.userId,
      function (project:any){
        parent.projects = JSON.parse(project._body);
      }
    );
  }
  goto_sprintBoard(projectId:String) {
    this._appComponent.set_projectId(projectId);
    this._appComponent.goto_page('storyBoard');
  }

  add_user_to_project(user_id:String, project_id:String) {
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
  remove_user_from_project(user_id:String, project_id:String) {
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
closeResult: String;
open(project:any, content:any) {
  this.projectToEdit = project;
  this.modalService.open(content).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): String {
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
