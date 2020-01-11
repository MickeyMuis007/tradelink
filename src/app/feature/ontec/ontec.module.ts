import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OntecRoutingModule } from "./ontec-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [OntecRoutingModule.components],
  imports: [
    CommonModule,
    OntecRoutingModule,
    SharedModule
  ]
})
export class OntecModule { }