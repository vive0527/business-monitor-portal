import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-main-downloads',
  templateUrl: './main-downloads.component.html',
  styleUrls: ['./main-downloads.component.css','../home/home.component.css']
})
export class MainDownloadsComponent implements OnInit {
  private downloadCount:number;

  constructor(private router:Router) { }

  ngOnInit() {
    this.downloadCount = 1200;
  }

  toDownloadsIndex(){
    this.router.navigate(["/home/downloads-index"]);

  }

}
