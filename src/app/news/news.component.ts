import { Component } from "@angular/core";
import { BaseComponent } from "./base.component";
import { Http } from "@angular/http";
import { UserViewModel } from "./news.model";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})

export class NewsComponent extends BaseComponent {


  result: UserViewModel = new UserViewModel();

  constructor(private http: Http) {
    super()
    console.log("NewsComponent constructor")
  }

  ngOnInit() {
    super.ngOnInit();
    console.log("Home NewsComponent Init")
    var params = { LoginId: "18827629579", Password: "", Tag: "PLANT", LoginPwd: "e10adc3949ba59abbe56e057f20f883e" };
    this.HttpPost('https://www.xxx.com/api/v1/account/Login', params, rs => {
      this.result = rs.data;
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
