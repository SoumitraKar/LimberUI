import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class sprintService {
  constructor(private http: Http) {  }
  jsonVar:Response;

  get_current_sprint_of_project(project_id:String, callback:any) {
    let body = {
    "project_id" : project_id
    };
    this.http.post("http://localhost:8000/get_current_sprint_of_project", body).subscribe (
      (res:Response) => {
        console.log(res);
        this.jsonVar = res;
        callback (this.jsonVar);
      }
    )
  }
}
