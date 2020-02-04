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
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatTableModule,
  MatExpansionModule,
  MatSelectModule,
  MatCardModule
} from "@angular/material";
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from 'ngx-mat-datetime-picker';

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
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class MaterialDesignModule { }