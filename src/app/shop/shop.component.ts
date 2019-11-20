import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.scss", "../app.component.scss"]
})
export class ShopComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  gotoProductDetails(url, id) {
    var myurl = `${url}/${id}`;
    window.location.href = myurl;
    // this.router.navigateByUrl(myurl).then(e => {
    //   if (e) {
    //     console.log("Navigation is successful!");
    //   } else {
    //     console.log("Navigation has failed!");
    //   }
    // });
  }
}
