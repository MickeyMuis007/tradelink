import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialDesignModule } from "./material-design/material-design.module";

const exportedModules = [
  MaterialDesignModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    exportedModules
  ],
  exports: [
    exportedModules
  ]
})
export class SharedModule { }