import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import { sidebarvisibilitystatus } from 'src/app/mock-task';
import { SideBarStatusService } from 'src/app/sidebar-status.service';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  // @Output() sideBarStatus:EventEmitter<boolean>=new EventEmitter();
  // @Output() footerWidth:EventEmitter<boolean>=new EventEmitter();
  faBars=faBars;
  constructor(private sideBarStatusService :SideBarStatusService) { }
  ngOnInit(): void {
  }
  statuschange(){
    console.log("event emmited");
    this.sideBarStatusService.changeSidebarStatus();
    // this.sideBarStatus.emit();
    // this.footerWidth.emit();
  }
}