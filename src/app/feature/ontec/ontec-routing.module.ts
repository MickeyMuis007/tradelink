import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { OntecContainer } from "./container/ontec.container";
import { ServiceComponent } from "./component/service/service.component";
import { QuoteComponent } from "./component/quote/quote.component";
import { QuoteRequestComponent } from './component/quote/quote-request/quote-request.component';

const routes: Routes = [
  { path: "", component: OntecContainer },
  { path: "service", component: ServiceComponent },
  { path: "quote", component: QuoteComponent },
  { path: "quote-request", component: QuoteRequestComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OntecRoutingModule {
  static components = [ OntecContainer, ServiceComponent, QuoteComponent, QuoteRequestComponent ];
}