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
import { Ng2Echarts } from 'ng2-echarts';
import {UserService} from './_services/user.service'

// used to create fake backend
import {fakeBackendProvider} from './_helpers/index';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';
import {TopComponent} from './top/top.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {MainComponent} from './main/main.component';
import { BizIndexComponent } from './biz-index/biz-index.component';
import { MainDownloadsComponent } from './main-downloads/main-downloads.component';
import { DownloadsIndexComponent } from './downloads-index/downloads-index.component';
import { DownloadsByTimeComponent } from './downloads-by-time/downloads-by-time.component';
import { DownloadsByNameComponent } from './downloads-by-name/downloads-by-name.component';
import { DownloadsByPublisherComponent } from './downloads-by-publisher/downloads-by-publisher.component';
import { DownloadsByUserComponent } from './downloads-by-user/downloads-by-user.component';


const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: UserLoginComponent},
  {
    path: 'home', component: HomeComponent,
    children: [{
      path: '',
      children: [
        {path: 'main', component: MainComponent},
        {path: 'biz-index',component:BizIndexComponent},
        {path: 'downloads-index',component:DownloadsIndexComponent}
      ]
    }


    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    Ng2Echarts,
    UserComponent,
    UserLoginComponent,
    HomeComponent,
    TopComponent,
    LeftMenuComponent,
    MainComponent,
    BizIndexComponent,
    MainDownloadsComponent,
    DownloadsIndexComponent,
    DownloadsByTimeComponent,
    DownloadsByNameComponent,
    DownloadsByPublisherComponent,
    DownloadsByUserComponent
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
