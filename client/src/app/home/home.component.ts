import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "运营监控平台"
  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigate(["/home/main"]);
  }

}
