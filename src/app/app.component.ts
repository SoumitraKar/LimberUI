import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { storyService } from './services/story.service';
import { projectService } from './services/project.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [projectService, storyService]
})
export class AppComponent  {
  userId:String = "5a01bfa0dfad2b2b74dea825";
  projectId:String;
  projects:any = [];
  pageName:String;
  url = "/";
  open:boolean = false;
  constructor(private router: Router, private projectService: projectService, private storyService: storyService) {
    router.events.subscribe((url:any) => this.url = url);

    //this.goto_page(this.pageName)
    // if(this.url == "/"){
    //   this.router.navigate(['/rightpanel']);
    // }
  }
  set_projectId (projectId:String) {
    this.projectId = projectId;
  }
  get_projectId () {
    return this.projectId;
  }
  get_userId () {
    return this.userId;
  }
  get_projects () {
    return this.projects;
  }
  goto_page(pageName:String) {
    console.log("XXWWXXQWW")
    console.log(pageName);
    this.pageName = pageName;
    switch (pageName) {
      case 'home' :
        this.router.navigate(['/home']);
        break;
      case 'storyBoard' :
        this.router.navigate(['/storyBoard/' + this.projectId]);
        break;
      default:
        this.router.navigate(['/home']);
        this.pageName = "home";
        break;
    }
  }
  toggleLeftPanel(open:boolean) {
    this.open = open;
  }

}
