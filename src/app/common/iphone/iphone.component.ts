import { Component, Input, OnInit } from '@angular/core';
import { JobData } from '../../interface/job.interface';

@Component({
  selector: 'my-iphone',
  templateUrl: 'iphone.component.html',
  styleUrls: ['iphone.component.scss'],
})
export class IphoneComponent implements OnInit {
  @Input() public data: JobData[];

  public showData: JobData[];

  ngOnInit(): void {
    // 只显示五条
    this.showData = this.data.slice(0, 5);
  }
}
