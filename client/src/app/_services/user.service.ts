/**
 * Created by Administrator on 2017/1/15.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
import {User} from '../_models/user';
import 'rxjs/add/operator/toPromise';
import {BaseResult} from "../_models/base-result";

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }


  login(user: User): Promise<BaseResult> {
    let body = JSON.stringify(user);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    console.log("do this service");
    return this.http.post("/api/login/", body, options)
      .toPromise()
      .then(response => response.json() as BaseResult)
      .catch(this.handleError);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
