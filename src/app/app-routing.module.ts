import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNavbarComponent } from './component/main-navbar/main-navbar.component';
import { RequestComponent } from "./component/request/request.component";
import { RequestDetailComponent } from "./component/request-detail/request-detail.component";


const routes: Routes = [
  { path: "request", component: RequestComponent },
  { path: "**", redirectTo: "request"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [MainNavbarComponent, RequestComponent, RequestDetailComponent];
}
