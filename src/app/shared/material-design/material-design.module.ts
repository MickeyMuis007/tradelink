import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { 
  MatSliderModule,
  MatSidenavModule,
  MatTreeModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatSliderModule,
    MatSidenavModule,
    MatTreeModule
  ]
})
export class MaterialDesignModule { }