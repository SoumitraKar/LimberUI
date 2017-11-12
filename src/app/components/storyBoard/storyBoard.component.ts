import { Component } from '@angular/core';
import { sprintService } from '../../services/sprint.service';
import { AppComponent }  from '../../app.component';

@Component({
  selector: 'app-story-board',
  templateUrl: './storyBoard.component.html',
  styleUrls: [ './storyBoard.component.css' ],
  providers: [ sprintService ]
})
export class storyBoardComponent {
  constructor ( private sprintService: sprintService, private _appComponent: AppComponent) {
  console.log("INCONSTRUCTOR");
  this.projectId = this._appComponent.get_projectId();
      var parent = this;
      this.sprintService.get_current_sprint_of_project(this.projectId,
        function (sprint:any){
          console.log("XXXXXXXXXXXXXXXXXXXXX")
          console.log(sprint);
          console.log(sprint._body);
          parent.sprint = JSON.parse(sprint._body)[0];
        }
      )
}
  projectId:String;
  sprint:any = {};
}
