import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isClose: boolean;

  ngOnInit(): void {
    this.isClose = true;
  }

  toggleNav(delay: number = 0) {
    setTimeout(() => {
      this.isClose = !this.isClose;
    }, delay);
  }
}
