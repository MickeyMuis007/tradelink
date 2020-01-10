import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideMenuComponent } from "./component/side-menu/side-menu.component";


const routes: Routes = [
  { path: "material", loadChildren: () => import("./feature/material/material.module").then(m => m.MaterialModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [SideMenuComponent];
}
