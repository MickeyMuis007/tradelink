import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { 
  MatSliderModule,
  MatSidenavModule,
  MatTreeModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatDividerModule,
  MatStepperModule
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
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatStepperModule
  ]
})
export class MaterialDesignModule { }