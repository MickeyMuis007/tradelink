import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { 
  MatSliderModule,
  MatSidenavModule,
  MatTreeModule,
  MatIconModule,
  MatButtonModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatSliderModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialDesignModule { }