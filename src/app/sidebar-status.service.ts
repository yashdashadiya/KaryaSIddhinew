import { Injectable, OnInit} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarStatusService implements OnInit{

  sideBarStatus?:boolean;
  statusChange: Subject<boolean> = new Subject<boolean>();

  constructor() { this.sideBarStatus=true;}

  changeSidebarStatus(){
    this.sideBarStatus=!this.sideBarStatus;
    console.log("side bar status is:"+this.sideBarStatus);
    this.statusChange.next(this.sideBarStatus);
  }
  ngOnInit(): void {
    
  }
  
}
