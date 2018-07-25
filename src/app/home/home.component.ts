import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {

  ticks = 0;
  constructor() {

  }

  ngOnInit() {
    console.log("HomeComponent Init")
    setInterval(() => {
      this.ticks += 1;
      // console.log(this.ticks);
    }, 1000);
  }
}
