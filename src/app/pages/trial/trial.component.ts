import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'trial-page',
  templateUrl: 'trial.component.html',
  styleUrls: ['trial.component.scss'],
})
export class TrialComponent implements OnInit, AfterViewInit {

  private iswaiting: boolean;
  private islogining: boolean;
  private waitTime: number;

  private phone: number;
  private code: string;

  private correctCode: string;
  private errMsg: string;

  private phoneControl = new FormControl('', [
    Validators.pattern('^1[\\d]{10}$'),
    Validators.required,
  ]);
  private codeControl = new FormControl('', {
    validators: Validators.required
  });

  ngOnInit(): void {
    this.iswaiting = false;
    this.islogining = false;
    this.code = null;
    this.errMsg = '';
  }

  ngAfterViewInit(): void {
  }

  // 获取验证码
  getValCode() {
    if (!this.iswaiting) {
      // 重制计时器
      this.iswaiting = true;
      this.waitTime = 60;
      const timer = setInterval(() => {
        if (--this.waitTime === 0) {
          clearInterval(timer);
          this.iswaiting = false;
        }
      }, 1000);
      // 获取验证码
      // this.xxxService.getxxx().then(res => {
      //   if (res.status.error === 0) {
      //     this.correctCode = res.result.code;
      //   } else {
      //     this.errMsg = res.status.message;
      //   }
      // }).catch(err => {
      //   this.errMsg = '错误: ' + err;
      // });
    }
  }

  // 登录
  login() {
    // 验证登录信息
    if (this.phoneControl.hasError('required')) {
      return this.errMsg = '手机号为必填项！';
    }
    if (this.phoneControl.hasError('pattern')) {
      return this.errMsg = '请输入正确的手机号！';
    }
    if (this.codeControl.hasError('required')) {
      return this.errMsg = '验证码为必填项！';
    }
    if (this.code !== this.correctCode) {
      return this.errMsg = '验证码错误！';
    }
    // 请求登录
    if (!this.islogining) {
      this.islogining = true;
      // dev
      setTimeout(() => this.islogining = false, 1000);
      // this.xxxService.login(this.phone, this.code).then(res => {
      //   if (res.status.error === 0) {
      //     // 登录成功
      //     this.islogin = false;
      //   } else {
      //     this.errMsg = res.status.message;
      //   }
      // }).catch(err => {
      //   this.errMsg = '错误: ' + err;
      // });
    }
  }

  // 清除登录信息
  clearMsg() {
    this.errMsg = '';
  }
}
