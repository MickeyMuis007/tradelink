import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { OntecContainer } from "./container/ontec.container";

const routes: Routes = [
  { path: "", component: OntecContainer }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class OntecRoutingModule {
  static components = [OntecContainer];
 }