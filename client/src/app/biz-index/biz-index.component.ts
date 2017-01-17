import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-biz-index',
  templateUrl: './biz-index.component.html',
  styleUrls: ['./biz-index.component.css',
    '../home/home.component.css']
})
export class BizIndexComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    //初始化的时候再加载一次页面，否则一刷新就回到首页了
    this.router.navigate(["/home/biz-index"]);
  }

}
