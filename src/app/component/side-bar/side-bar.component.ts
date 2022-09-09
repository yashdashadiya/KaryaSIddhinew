import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  
  // <-- variables -->
  homePage:string="Selected";
  myTaskPage:String="notSelected";

  // <-- constructor -->
  constructor() { }
  
  // <--functions-->
  ngOnInit(): void {
  }

  mytaskSelected(){
    this.myTaskPage="Selected";
    this.homePage="notSelected"
  }
  homeSelected(){
    this.myTaskPage="notSelected";
    this.homePage="Selected"
  }

}
