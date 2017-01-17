import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {UserComponent} from "./user/user.component";
import {AlertModule, ButtonsModule} from "ng2-bootstrap";
import {UserLoginComponent} from "./user-login/user-login.component";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {UserService} from './_services/user.service'

// used to create fake backend
import {fakeBackendProvider} from './_helpers/index';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';
import {TopComponent} from './top/top.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {MainComponent} from './main/main.component';
import { BizIndexComponent } from './biz-index/biz-index.component';


const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: UserLoginComponent},
  {
    path: 'home', component: HomeComponent,
    children: [{
      path: '',
      children: [
        {path: 'main', component: MainComponent},
        {path: 'biz-index',component:BizIndexComponent}
      ]
    }


    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserLoginComponent,
    HomeComponent,
    TopComponent,
    LeftMenuComponent,
    MainComponent,
    BizIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    UserService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
}
