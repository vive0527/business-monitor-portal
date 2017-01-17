import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['../home/home.component.css']
})
export class TopComponent implements OnInit {

  title = "运营监控平台"

  constructor() { }

  ngOnInit() {
  }

}
