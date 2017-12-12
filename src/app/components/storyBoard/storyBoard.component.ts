import { Component } from '@angular/core';
import { sprintService } from '../../services/sprint.service';
import { storyService } from '../../services/story.service';
import { AppComponent }  from '../../app.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-story-board',
  templateUrl: './storyBoard.component.html',
  styleUrls: [ './storyBoard.component.css' ],
  providers: [ sprintService, storyService ]
})
export class storyBoardComponent {
  constructor (private route: ActivatedRoute, private sprintService: sprintService, private storyService: storyService, private _appComponent: AppComponent) {
  var par:any;
  this.dataAvailable = false;
  this.route.params.subscribe( params => par = params );
  this.projectId = par.project_id;
  this.get_current_sprint_of_project(this.projectId);
}
projectId:String;
sprint:any = {};
stories:any = [];
dataAvailable:boolean = false;
get_current_sprint_of_project(projectId:String) {
  var parent = this;
  this.sprintService.get_current_sprint_of_project(projectId,
    function (sprint:any){
      parent.sprint = JSON.parse(sprint._body)[0];
      if(parent.sprint){
        parent.dataAvailable = true;
        parent.get_story_by_sprint(parent.sprint._id);
      }
      else
        parent.dataAvailable = false;
    }
  )
}
get_story_by_sprint(sprintId:String) {
  var parent = this;
  this.storyService.get_story_by_sprint(sprintId,
    function (story:any){
      console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
      parent.stories = JSON.parse(story._body);
      console.log(parent.stories);
    }
  )
}
dropFunction (e: any, dropLoc:String) {
  console.log("2222222222222222222222222");
  e.dragData.lable = dropLoc;
  console.log(e.dragData.lable);
  console.log(dropLoc);
  return true;
}
}
