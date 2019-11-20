import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./home-page/home-page.component";
import { ShopComponent } from "./shop/shop.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "shop", component: ShopComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "**", redirectTo: "/home" },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
