import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var M: any;

@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  ngOnInit() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }
}
