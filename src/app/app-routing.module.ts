import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideMenuComponent } from "./component/side-menu/side-menu.component";
import { MainNavbarComponent } from './component/main-navbar/main-navbar.component';


const routes: Routes = [
  { path: "material", loadChildren: () => import("./feature/material/material.module").then(m => m.MaterialModule) },
  { path: "ontec", loadChildren: () => import("./feature/ontec/ontec.module").then(m => m.OntecModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [SideMenuComponent, MainNavbarComponent];
}
