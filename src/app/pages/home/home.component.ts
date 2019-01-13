import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PartnerData } from '../../interface/partner.interface';
import { partnerData } from '../../mock/partner.data';

@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  public images: PartnerData[];
  public showArrow: boolean;

  @ViewChild('video') private video: ElementRef;

  private showPoster: boolean;
  private isPlay: boolean;

  ngOnInit(): void {
    this.showPoster = true;
    this.isPlay = false;
    this.images = partnerData;
    this.showArrow = true;
  }

  ngAfterViewInit(): void {
    this.video.nativeElement.addEventListener('ended', () => {
      this.showPoster = true;
      this.isPlay = false;
    });

    window.addEventListener('scroll', () => {
      this.showArrow = window.scrollY < 100;
    });

    this.openingAnimate({
      el: '#animate',
    });
  }

  // 开场动画
  openingAnimate({
    el,
    scale = 2,
    speed = 3,
    strokeWidth = 3,
    width = 3782,
    height = 1978,
  }) {
    // tslint:disable-next-line
    let buildingPoints = [{"start":[260,0],"end":[1178,242]},{"start":[0,664],"end":[1054,496]},{"start":[1838,984],"end":[1626,584]},{"start":[1754,0],"end":[1588,306]},{"start":[934,66],"end":[1384,270]},{"start":[1500,268],"end":[1350,58]},{"start":[1670,394],"end":[1810,422]},{"start":[1668,458],"end":[1812,558]},{"start":[1182,502],"end":[1330,456]},{"start":[1178,242],"end":[1052,260]},{"start":[1178,242],"end":[1178,220]},{"start":[1182,502],"end":[1178,242]},{"start":[914,236],"end":[908,518]},{"start":[1054,496],"end":[1052,260]},{"start":[1054,496],"end":[1182,502]},{"start":[1590,486],"end":[1626,584]},{"start":[1626,482],"end":[1626,584]},{"start":[1626,584],"end":[1782,580]},{"start":[1588,306],"end":[1680,118]},{"start":[1588,306],"end":[1590,486]},{"start":[872,114],"end":[1330,274]},{"start":[1588,470],"end":[1330,456]},{"start":[1572,110],"end":[1550,278]},{"start":[1556,280],"end":[1582,116]},{"start":[1500,268],"end":[1330,274]},{"start":[1330,456],"end":[1330,274]},{"start":[1376,96],"end":[1116,128]},{"start":[1500,268],"end":[1550,276]},{"start":[1556,280],"end":[1588,306]},{"start":[1552,282],"end":[1500,268]},{"start":[1588,306],"end":[1552,282]},{"start":[1330,276],"end":[904,148]},{"start":[1330,276],"end":[1520,274]},{"start":[912,234],"end":[1036,260]},{"start":[1390,114],"end":[1116,148]},{"start":[1120,150],"end":[1394,118]},{"start":[1374,66],"end":[1462,202]},{"start":[1670,394],"end":[1590,396]},{"start":[1668,458],"end":[1590,460]},{"start":[1602,282],"end":[1602,518]},{"start":[1630,480],"end":[1626,482]},{"start":[958,48],"end":[1116,128]},{"start":[1116,150],"end":[1116,128]},{"start":[1398,270],"end":[1158,148]},{"start":[1178,242],"end":[918,180]},{"start":[1630,260],"end":[1630,480]},{"start":[1634,482],"end":[1630,480]},{"start":[1634,482],"end":[1634,568]},{"start":[1388,68],"end":[1436,158]},{"start":[966,146],"end":[1080,132]},{"start":[1116,148],"end":[968,166]},{"start":[972,168],"end":[1120,150]},{"start":[1632,568],"end":[1812,566]},{"start":[1670,396],"end":[1668,458]},{"start":[1072,496],"end":[1068,274]},{"start":[1074,280],"end":[1074,496]},{"start":[1154,500],"end":[1148,278]},{"start":[1154,270],"end":[1158,500]},{"start":[1154,270],"end":[1068,274]},{"start":[1074,280],"end":[1148,278]},{"start":[1230,280],"end":[1232,486]},{"start":[1240,482],"end":[1236,290]},{"start":[1230,280],"end":[1314,300]},{"start":[1236,290],"end":[1308,306]},{"start":[1314,300],"end":[1316,460]},{"start":[1308,456],"end":[1308,306]},{"start":[824,216],"end":[974,194]},{"start":[1006,202],"end":[868,224]},{"start":[906,236],"end":[1058,214]},{"start":[1094,222],"end":[954,242]},{"start":[990,248],"end":[1130,230]},{"start":[1022,256],"end":[1150,236]},{"start":[1034,86],"end":[1214,52]},{"start":[1048,92],"end":[1242,58]},{"start":[934,116],"end":[1012,102]},{"start":[1568,136],"end":[1404,96]},{"start":[1566,148],"end":[1412,114]},{"start":[1414,118],"end":[1566,152]},{"start":[1436,158],"end":[1560,186]},{"start":[1442,172],"end":[1560,200]},{"start":[1460,200],"end":[1460,210]},{"start":[1556,222],"end":[1460,200]},{"start":[1556,232],"end":[1460,210]},{"start":[1464,214],"end":[1558,234]},{"start":[1552,254],"end":[1480,238]},{"start":[1552,258],"end":[1484,244]},{"start":[868,224],"end":[868,210]},{"start":[906,236],"end":[906,220]},{"start":[950,230],"end":[950,240]},{"start":[990,236],"end":[990,248]},{"start":[1022,256],"end":[1022,246]},{"start":[1572,196],"end":[1592,210]},{"start":[1570,202],"end":[1622,238]},{"start":[1564,228],"end":[1610,260]},{"start":[1562,234],"end":[1606,264]},{"start":[1600,284],"end":[1560,256]},{"start":[1560,260],"end":[1600,288]},{"start":[914,238],"end":[926,260]},{"start":[926,260],"end":[1034,274]},{"start":[1034,274],"end":[1028,264]},{"start":[916,262],"end":[926,284]},{"start":[1036,294],"end":[926,284]},{"start":[1024,278],"end":[1036,294]},{"start":[928,308],"end":[916,284]},{"start":[1038,314],"end":[928,308]},{"start":[1038,314],"end":[1028,302]},{"start":[918,312],"end":[930,330]},{"start":[930,330],"end":[1038,336]},{"start":[1038,336],"end":[1030,324]},{"start":[918,340],"end":[930,360]},{"start":[930,360],"end":[1036,364]},{"start":[1036,364],"end":[1026,344]},{"start":[930,386],"end":[918,366]},{"start":[1040,388],"end":[930,386]},{"start":[1040,388],"end":[1030,370]},{"start":[918,370],"end":[930,390]},{"start":[1040,392],"end":[930,390]},{"start":[1030,374],"end":[1040,392]},{"start":[1038,414],"end":[924,416]},{"start":[1030,398],"end":[1038,414]},{"start":[920,430],"end":[930,444]},{"start":[930,444],"end":[1038,436]},{"start":[1038,436],"end":[1032,422]},{"start":[920,472],"end":[914,462]},{"start":[1038,462],"end":[920,472]},{"start":[1038,462],"end":[1034,450]},{"start":[1274,300],"end":[1278,464]},{"start":[1306,458],"end":[1240,476]},{"start":[1306,458],"end":[1316,458]},{"start":[1080,284],"end":[1080,496]},{"start":[1146,284],"end":[1080,284]},{"start":[1092,492],"end":[1080,496]},{"start":[1092,492],"end":[1088,286]},{"start":[1152,494],"end":[1092,492]},{"start":[1094,290],"end":[1146,288]},{"start":[1092,336],"end":[1148,334]},{"start":[1092,342],"end":[1148,340]},{"start":[1150,388],"end":[1094,390]},{"start":[1094,396],"end":[1150,394]},{"start":[1150,434],"end":[1094,434]},{"start":[1150,440],"end":[1094,440]},{"start":[1094,492],"end":[1094,290]},{"start":[1128,492],"end":[1124,290]},{"start":[1130,290],"end":[1134,492]},{"start":[1258,752],"end":[736,604]},{"start":[1052,722],"end":[756,624]}];;
    buildingPoints = _scale(buildingPoints);
    // tslint:disable-next-line
    let lightPoints = {"line":[[1238,111,1244,262],[1244,262,1238.5,262],[1238.5,262,1238,273],[1238,273,1245,275],[1244,262,1249.5,262],[1249.5,262,1252,273],[1252,273,1245,275],[1225,324.5,1267,324.5],[1267,324.5,1262.5,330],[1262.5,330,1231,330],[1231,330,1225,324.5]],"curve":[[1238,111,1241,105,1247.5,111],[1240,273.5,1215,271,1234,325],[1240,273.5,1230,271,1239,325],[1240,273.5,1250,271,1247,325],[1245,275,1258.5,271,1251,325],[1247.5,275,1268.5,271,1259,325],[1247.5,275,1271,262.5,1259,325],[1234,330,1230,360,1224,330],[1240,330,1225,382.5,1199,330],[1245,330,1235,382.5,1215,325],[1250,330,1244,387.5,1243,330],[1255,330,1264,387.5,1272.5,330],[1260,330,1271,392.5,1285,331.5],[1262.5,330,1281,380,1300,330]]};
    lightPoints = _scale(lightPoints);

    const canvas = document.querySelector(el);
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(
      _scale(1300), _scale(500), _scale(0), _scale(1000), _scale(500), _scale(1000)
    );
    gradient.addColorStop(0, '#05afd4');
    gradient.addColorStop(1, '#bf62cd');
    ctx.strokeStyle = gradient;

    ctx.lineWidth = strokeWidth;

    render.bind(this)();
    function render() {
      window['__isAnimating'] = true;
      this.__timer = null;
      this.__timer = window.requestAnimationFrame.bind(this)(() => {
        if (this.__frame > speed * 60) {
          // 关闭动画
          window.cancelAnimationFrame(this.__timer);
          window['__isAnimating'] = false;
          this.__frame = 0;
          this.__timer = null;
          this.openingAnimationStatus = false;
        } else {
          lightAnimate.bind(this)(lightPoints);
          buildingAnimate.bind(this)(buildingPoints);
          render.bind(this)();
          this.__frame++;
        }
      });
    }

    // 建筑部分动画
    function buildingAnimate(queue) {
      queue.forEach(p => {
        let {start, end} = p;
        lineAnimation.bind(this)(start[0], start[1], end[0], end[1]);
      });
    }
    // 吊灯部分动画
    function lightAnimate(queue) {
      for (let [key, value] of Object.entries(queue)) {
        let fn;
        switch (key) {
          case 'line':
            fn = lineAnimation;
            break;
          case 'curve':
            fn = curveAnimation;
            break;
          default:
        }
        queue[key].forEach(points => {
          fn.bind(this)(...points);
        });
      }
    }

    // 绘直线工具
    function lineAnimation(startX, startY, x, y) {
      const currentStep = [
        startX + this.__frame * getAnimateStep(startX, x),
        startY + this.__frame * getAnimateStep(startY, y),
      ];
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(currentStep[0], currentStep[1]);
      ctx.stroke();
      ctx.closePath();
    }
    // 绘曲线工具
    function curveAnimation(startX, startY, ctrlX, ctrlY, x, y) {
      const Q1 = [
        startX + getAnimateStep(startX, ctrlX) * this.__frame,
        startY + getAnimateStep(startY, ctrlY) * this.__frame,
      ];
      const Q2 = [
        ctrlX + getAnimateStep(ctrlX, x) * this.__frame,
        ctrlY + getAnimateStep(ctrlY, y) * this.__frame,
      ];
      const endPointAxis = [
        Q1[0] + getAnimateStep(Q1[0], Q2[0]) * this.__frame,
        Q1[1] + getAnimateStep(Q1[1], Q2[1]) * this.__frame,
      ];
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(Q1[0], Q1[1], endPointAxis[0], endPointAxis[1]);
      ctx.stroke();
      ctx.closePath();
    }
    // 计算每一帧需要绘制的步长
    function getAnimateStep(start, end, duration = speed) {
      const frames = duration * 60;
      const step = (end - start) / frames;
      return step;
    }
    // 缩放坐标
    function _scale(object, rate = scale) {
      let type = Object.prototype.toString.call(object).toLowerCase();
      switch (type) {
        case '[object number]':
          object *= rate;
          break;
        case '[object object]':
        case '[object array]':
          for (let obj of object) {
            obj = _scale(obj, rate);
          }
          break;
        default:
      }
      return object;
    }
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
