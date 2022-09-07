import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit ,Input, SimpleChanges} from '@angular/core';
import { SideBarStatusService } from 'src/app/sidebar-status.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // @Input() sideBarStatusBool?:boolean;
  sideBarStatus?:boolean;
  subscription: any;
  footerWidth='normalWidth';
  
  constructor(private service:SideBarStatusService) {

    this.sideBarStatus=service.sideBarStatus;

    this.subscription=service.statusChange.subscribe((value)=>{
      this.sideBarStatus=value;console.log("new:"+value);
      
      if(this.sideBarStatus){
        console.log("normalWidth");
        this.footerWidth='normalWidth';
      }
      else{
        console.log("fullWidth");
        this.footerWidth='fullWidth';
      }
    })

   }
   
  
  ngOnInit(): void {

  }
    ngOnChanges(sideBarStatus: SimpleChanges) {
      console.log("as");
    console.log(sideBarStatus);
  }

}
