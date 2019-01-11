import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TimelineData } from '../../interface/timeline.interface';
import { valuesData, advantageData } from '../../mock/timeline.data';

@Component({
  selector: 'product-page',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss'],
})
export class ProductComponent implements OnInit, AfterViewInit {

  public data1: TimelineData[];
  public data2: TimelineData[];

  ngOnInit(): void {
    // 价值观
    this.data1 = valuesData;
    // 优势
    this.data2 = advantageData;
  }

  ngAfterViewInit(): void {
  }
}
