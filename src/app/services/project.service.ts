import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class projectService {
  constructor(private http: Http) {  }
  jsonVar:Response;
  get_all_project(callback:any) {
    let headers = new Headers();
    this.http.get("http://localhost:8000/get_all_project").subscribe (
      (res:Response) => {
        console.log(res);
        this.jsonVar = res;
        callback (this.jsonVar);
      }
    )
  }
  get_project_details_by_user(user_id:String, callback:any) {
    let body = {
    "user_id" : user_id
    };
    this.http.post("http://localhost:8000/get_project_details_by_user", body).subscribe (
      (res:Response) => {
        console.log(res);
        this.jsonVar = res;
        callback (this.jsonVar);
      }
    )
  }
  get_project_details_by_id(id:String, callback:any) {
    let body = {
    "id" : id
    };
    this.http.post("http://localhost:8000/get_project_details_by_id", body).subscribe (
      (res:Response) => {
        console.log(res);
        this.jsonVar = res;
        callback (this.jsonVar);
      }
    )
  }
  get_project_full_details_by_user(id:String, callback:any) {
    let body = {
    "user_id" : id
    };
    this.http.post("http://localhost:8000/get_project_full_details_by_user", body).subscribe (
      (res:Response) => {
        console.log(res);
        this.jsonVar = res;
        callback (this.jsonVar);
      }
    )
  }
  add_user_to_project(user_id:String, project_id:String, callback:any) {
    let body = {
    "user_id" : user_id,
    "project_id" : project_id
    };
    this.http.post("http://localhost:8000/add_user_to_project", body).subscribe (
      (res:Response) => {
        console.log(res);
        this.jsonVar = res;
        callback (this.jsonVar);
      }
    )
  }
  remove_user_from_project(user_id:String, project_id:String, callback:any) {
    let body = {
    "user_id" : user_id,
    "project_id" : project_id
    };
    this.http.post("http://localhost:8000/remove_user_from_project", body).subscribe (
      (res:Response) => {
        console.log(res);
        this.jsonVar = res;
        callback (this.jsonVar);
      }
    )
  }
}
