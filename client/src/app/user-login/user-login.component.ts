import { Component, OnInit } from '@angular/core';
import { User} from '../user/user';
import { Http,Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-user-login',
  template:`<div class="row myCenter">
  <div class="col-xs-6 col-md-4 col-center-block">
    <form #loginForm="ngForm" (ngSubmit)="onSubmit()" >
      <h3 class="form-signin-heading">请登录</h3>
     <div class="form-group">
      <label for="username" class="sr-only">用户名</label>
      <input type="text" id="username" [(ngModel)]="model.username" name="username" class="form-control" placeholder="用户名" required autofocus #username="ngModel">
      <div [hidden]="username.valid || username.pristine"
             class="alert alert-danger">
          Username is required
      </div>
      </div>
      <div class="form-group">
      <label for="inputPassword" class="sr-only">密码</label>
      <input type="password" id="inputPassword" [(ngModel)]="model.password" name="password" class="form-control" placeholder="密码" required  #password="ngModel">
      <div [hidden]="password.valid || password.pristine"
             class="alert alert-danger">
          password is required
      </div>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="remember-me">
          记住我 </label>
      </div>
      <div [hidden]="loginSuccessed"
             class="alert alert-danger">
          Username or Password is Error.
      </div>
      <button class="btn btn-lg btn-primary btn-block"  [disabled]="!loginForm.form.valid ||submitted" type="submit">登录</button>
    </form>
  </div>
</div>`,
  //templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private http: Http) { }

  model = new User("sunsz","123");

  submitted = false;
  loginSuccessed = true;
  onSubmit() {
    this.submitted = true;
    console.log('Username is ' + this.model.username);
    console.log('server handling ...');

    this.login();

    if(this.model.username=='sunsz'&&this.model.password=="123"){
      this.loginSuccessed = true;
      console.log('login success');
    }else{
      this.submitted = false;
      this.loginSuccessed = false;
      console.log('login failure');
    }

  }

  login():Promise<User>{
    let body = JSON.stringify(this.model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(body)
    return this.http.post("/api/login/",body,options)
      .toPromise().then(response => console.log(response)).catch(this.handleError);

  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  ngOnInit() {
  }


}
