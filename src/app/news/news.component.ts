import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { BaseComponent } from "./base.component";
import { Http } from "@angular/http";
import { UserViewModel } from "./news.model";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewsComponent extends BaseComponent {


  result: UserViewModel = new UserViewModel();

  constructor(private http: Http, private ref: ChangeDetectorRef) {
    super()
    console.log("NewsComponent constructor")
  }

  ngOnInit() {
    super.ngOnInit();
    console.log("Home NewsComponent Init")
    var params = { LoginId: "18827629579", Password: "", Tag: "PLANT", LoginPwd: "e10adc3949ba59abbe56e057f20f883e" };
    this.HttpPost('https://www.xxxx.com/api/v1/account/Login', params, rs => {
      this.result = rs.data;
      this.ref.markForCheck();//当策略为OnPush，内容发生改变需要调用此方法手动检查

      // implement local change detection checks
      this.ref.detectChanges();//结合detach来实现本地化的检测
      // example 
      //         ref.detach();
      //         setInterval(() => {
      //           this.ref.detectChanges();
      //         }, 5000);

      // this.ref.detach();//分离
      // this.ref.reattach();//附加
    })
  }


  HttpPost(url, params, callback) {
    this.http.post(url, params).subscribe(res => {
      let result = res.json();
      callback(result == null ? "[]" : result);
    }, error => {
      console.log("失败，请稍后重试");
    });
  }

}
