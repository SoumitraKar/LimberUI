import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class storyService {
  constructor(private http: Http) {  }
  jsonVar:Response;

  get_story_by_assignee(user_id:String, callback:any) {
    let body = {
    "user_id" : user_id
    };
    this.http.post("http://localhost:8000/get_story_by_assignee", body).subscribe (
      (res:Response) => {
        console.log(res);
        this.jsonVar = res;
        callback (this.jsonVar);
      }
    )
  }
  get_story_by_sprint(sprintId:String, callback:any) {
    let body = {
    "sprint" : sprintId
    };
    this.http.post("http://localhost:8000/get_story_by_sprint", body).subscribe (
      (res:Response) => {
        console.log(res);
        this.jsonVar = res;
        callback (this.jsonVar);
      }
    )
  }
}
