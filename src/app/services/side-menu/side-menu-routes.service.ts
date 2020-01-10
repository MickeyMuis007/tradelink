import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { SideMenuNode } from "src/app/component/side-menu/model/side-menu-node.model";

const ADMIN_ROUTES: Observable<SideMenuNode[]> = of([
  {
    name: "Material",
    uri: "material",
    children: [
      { name: "Side Nav", uri: "material/side-nav" }
    ]
  }, {
    name: "MDBoostrap",
    uri: "",
    children: [
      {
        name: "Buttons",
        uri: "",
        children: [
          { name : "Basic", uri: ""}
        ]
      }
    ]
  }
])

@Injectable()
export class SideMenuRoutesService {
  getAdminRoutes(): Observable<SideMenuNode[]> {
    return ADMIN_ROUTES;
  }
}