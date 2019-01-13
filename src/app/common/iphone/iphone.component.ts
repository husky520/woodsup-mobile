import { Component, Input, OnInit } from '@angular/core';
import { JobData } from '../../interface/Job.interface';

@Component({
  selector: 'my-iphone',
  templateUrl: 'iphone.component.html',
  styleUrls: ['iphone.component.scss'],
})
export class IphoneComponent implements OnInit {
  @Input() public data: JobData[];
  @Input() public scale: number;

  public iphoneScale: number;

  public showData: JobData[];

  static fitScreen() {
    // iPhone5s(SE): 1.775
    // iPhone6(s): 1.7787
    // iPhone6(s) Plus: 1.7778
    // iPhoneX: 2.1653
    // iPhoneXs Max: 2.1643
    const screenRate = window.innerHeight / window.innerWidth;
    let iphoneScale;
    if (screenRate <= 1.2) {
      iphoneScale = 0.6 * screenRate;
    } else if (screenRate <= 1.5) {
      iphoneScale = 0.65;
    } else if (screenRate <= 1.7) {
      iphoneScale = 0.7;
    } else if (screenRate <= 1.8) {
      iphoneScale = 0.8;
    } else if (screenRate <= 2) {
      iphoneScale = 0.85;
    } else if (screenRate <= 2.1) {
      iphoneScale = 0.9;
    } else {
      iphoneScale = 1;
    }
    // iPhone5s(SE)
    if (window.innerWidth <= 320) {
      iphoneScale = 0.7;
    }
    return iphoneScale;
  }

  ngOnInit(): void {
    // 只显示五条
    this.showData = this.data.slice(0, 5);

    // 屏幕适配
    this.iphoneScale = this.scale || IphoneComponent.fitScreen();

    window.addEventListener('resize', () => {
      this.iphoneScale = this.scale || IphoneComponent.fitScreen();
    });
  }
}
