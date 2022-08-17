import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sidebarStatus = 'side';
  opened = true;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.checkMediaQuery();
  }

  checkMediaQuery() {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.opened = false;
          this.sidebarStatus = 'over';
        } else {
          this.opened = true;
          this.sidebarStatus = 'side';
        }
      });
  }
}
