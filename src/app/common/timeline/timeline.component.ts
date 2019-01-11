import { Component, Input, OnInit } from '@angular/core';
import { TimelineData } from '../../interface/timeline.interface';

@Component({
  selector: 'time-line',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.scss'],
})
export class TimelineComponent implements OnInit {

  @Input() public data: TimelineData[];

  public leftItems: TimelineData[];
  public rightItems: TimelineData[];

  constructor() {
  }

  ngOnInit() {
    this.leftItems = this.data.filter(item => item.style === 'left');
    this.rightItems = this.data.filter(item => item.style === 'right');
  }
}
