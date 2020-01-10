import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { MaterialContainer } from './container/material.container';
import { SideNavComponent } from "./components/side-nav/side-nav.component";

const routes: Routes = [
  { path: "", component: MaterialContainer },
  { path: "side-nav", component: SideNavComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class MaterialRoutingModule { 
  static components = [ MaterialContainer, SideNavComponent]
}