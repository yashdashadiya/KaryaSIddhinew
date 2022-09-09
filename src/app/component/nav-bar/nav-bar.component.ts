import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import { SideBarStatusService } from 'src/app/sidebar-status.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  // <-- variables -->
  faBars=faBars;

  constructor(private sideBarStatusService :SideBarStatusService) { }
  
  ngOnInit(): void {
  }

  // emit event on click on button
  statuschange(){
    this.sideBarStatusService.changeSidebarStatus();
  }
}