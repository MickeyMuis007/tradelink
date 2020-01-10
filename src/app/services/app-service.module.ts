import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppFacadeService } from "./app-facade.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AppFacadeService,
    AppFacadeService.services
  ]
})
export class AppServiceModule {

}