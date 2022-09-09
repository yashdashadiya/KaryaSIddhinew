import { Injectable, OnInit} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarStatusService implements OnInit{

  // <-- variables -->
  sideBarStatus?:boolean;
  statusChange: Subject<boolean> = new Subject<boolean>();

  constructor() { this.sideBarStatus=true;}
  
  // <-- functions -->
  ngOnInit(): void { 
  }

  changeSidebarStatus(){
    this.sideBarStatus=!this.sideBarStatus;
    this.statusChange.next(this.sideBarStatus);
  }
}
