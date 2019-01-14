import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PartnerData } from '../../interface/partner.interface';
import { partnerData } from '../../mock/partner.data';

@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  public showArrow: boolean;
  public partnerData: PartnerData[];
  public partnerGroup: PartnerData[][];

  public screenWidth: number;
  public screenHeight: number;

  @ViewChild('video') private video: ElementRef;

  private showPoster: boolean;
  private isPlay: boolean;

  ngOnInit(): void {
    this.showArrow = true;
    this.showPoster = true;
    this.isPlay = false;

    this.screenWidth = innerWidth;
    this.screenHeight = innerHeight;

    // 合作伙伴 (4个一组)
    this.partnerData = partnerData;
    this.partnerGroup = [];
    for (let i = 0, len = this.partnerData.length; i < len; i += 4) {
      this.partnerGroup.push(this.partnerData.slice(i, i + 4));
    }
  }

  ngAfterViewInit(): void {
    this.video.nativeElement.addEventListener('ended', () => {
      this.showPoster = true;
      this.isPlay = false;
    });

    window.addEventListener('scroll', () => {
      this.showArrow = window.scrollY < 100;
    });
  }

  toggleVideo(status: boolean = null) {
    this.showPoster = false;

    this.isPlay = status === null
      ? !this.isPlay
      : status;

    if (this.isPlay) {
      this.video.nativeElement.play();
    } else {
      this.video.nativeElement.pause();
    }
  }
}
