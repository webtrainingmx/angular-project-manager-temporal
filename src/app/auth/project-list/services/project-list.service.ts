import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Project} from '../models/project.model';


@Injectable()
export class ProjectListService {
  constructor(private _http: Http) {

  }

  getAll(): Observable<Array<Project>> {
    const url = 'http://172.104.91.187/projects'; // http://localhost:8089/projects';

    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({
      headers: headers
    });

    return this._http.get(url, options).map((response) => {
      return response.json();
    });

  }

  deleteProject( project: Project ) {
    // http://localhost:8085/projects/1
    const url = `http://172.104.91.187/projects/${project.id}`;

    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({
      headers: headers
    });

    return this._http.delete(url, options).map((response) => {
      console.log(response);
      return response.json();
    })
  }
}
