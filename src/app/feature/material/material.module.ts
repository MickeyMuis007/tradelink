import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialRoutingModule } from "./material-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MaterialRoutingModule.components],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    SharedModule
  ]
})
export class MaterialModule { }