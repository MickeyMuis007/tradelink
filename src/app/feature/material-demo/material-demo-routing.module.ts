import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { MaterialDemoContainer } from './container/material-demo.container';

const routes: Routes = [
  { path: "", component: MaterialDemoContainer }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class MaterialDemoRoutingModule { 
  static components = [ MaterialDemoContainer]
}