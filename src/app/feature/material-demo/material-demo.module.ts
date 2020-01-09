import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialDemoRoutingModule } from "./material-demo-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MaterialDemoRoutingModule.components],
  imports: [
    CommonModule,
    MaterialDemoRoutingModule,
    SharedModule
  ]
})
export class MaterialDemoModule { }