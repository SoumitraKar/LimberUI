import { Component, Input } from '@angular/core';
import { projectService } from '../../../services/project.service';
import { AppComponent }  from '../../../app.component';

@Component({
  selector: 'app-left-menu',
  templateUrl: './leftMenu.component.html',
  styleUrls: ['./leftMenu.component.css'],
  providers: [projectService]
})
export class LeftMenuComponent {
  @Input() open: boolean;
  userId:String;
  dataAvailable:boolean;
  projects:any = {};
  constructor(private projectService: projectService, private _appComponent: AppComponent){
    this.userId = this._appComponent.get_userId();
    this.get_project_full_details_by_user(this.userId);
  }
  get_project_full_details_by_user (userId:String) {
    var parent = this;
    this.projectService.get_project_full_details_by_user(userId,
      function (project:any){
        parent.projects = JSON.parse(project._body);
        parent.dataAvailable = true;
      }
    );
  }
}
