import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { SideBarStatusService } from 'src/app/sidebar-status.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // <-- variables -->
  sideBarStatus?: boolean;
  subscription: any;
  footerWidth = 'normalWidth';

  // <-- constructor -->
  constructor(private service: SideBarStatusService) {
    this.sideBarStatus = service.sideBarStatus;

    this.subscription = service.statusChange.subscribe((value) => {
      this.sideBarStatus = value;
      if (this.sideBarStatus) {
        this.footerWidth = 'normalWidth';
      }
      else {
        this.footerWidth = 'fullWidth';
      }
    })
  }

// <-- functions -->
  ngOnInit(): void {

  }
}
