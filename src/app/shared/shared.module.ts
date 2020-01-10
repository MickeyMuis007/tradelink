import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { MaterialDesignModule } from "./material-design/material-design.module";

const exportedModules = [
  MaterialDesignModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    exportedModules,
    // MDBBootstrapModule.forRoot()
  ],
  exports: [
    exportedModules,
    MDBBootstrapModule
  ]
})
export class SharedModule { }