import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  userId:String = "5a01bfa0dfad2b2b74dea825";
  projectId:String;
  pageName:String;
  url = "/";
  constructor(private router: Router) {
    router.events.subscribe((url:any) => this.url = url);
    this.goto_page(this.pageName)
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
  goto_page(pageName:String) {
    console.log("XXWWXXQWW")
    console.log(pageName);
    this.pageName = pageName;
    switch (pageName) {
      case 'home' :
        this.router.navigate(['/home']);
        break;
      case 'storyBoard' :
        this.router.navigate(['/storyBoard']);
        break;
      default:
        this.router.navigate(['/home']);
        this.pageName = "home";
        break;
    }
  }
}
