import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isClose: boolean;
  @ViewChild('navBtn') navBtn: ElementRef;

  ngOnInit(): void {
    this.isClose = true;

    document.addEventListener('click', (e) => {
      if (!this.navBtn.nativeElement.contains(e.target)) {
        this.toggleNav(true);
      }
    });
  }

  toggleNav(status: boolean = null, delay: number = 0) {
    setTimeout(() => {
      if (status === null) {
        this.isClose = !this.isClose;
      } else {
        this.isClose = status;
      }
    }, delay);
  }
}
