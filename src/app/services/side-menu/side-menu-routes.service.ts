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
        name: "Navbars",
        uri: ""
      }
    ]
  }
]);


const ONTEC_ROUTES: Observable<SideMenuNode[]> = of([
  {
    name: "Ontec",
    uri: "ontec",
    children: [
      { name: "Services", uri: "" },
      { name: "Pricing", uri: "" },
      {
        name: "Technology",
        uri: "",
        children: [
          {
            name: "Micro-Generation",
            uri: "",
            children: [
              { name: "Basic", uri: "" }
            ]
          },
          { name: "In Home Vending", uri: "" },
          { name: "Apps And Online Payment", uri: "" },
          { name: "Load Management", uri: "" }
        ]
      }
    ]
  }, {
    name: "Login",
    uri: ""
  }, {
    name: "Profile",
    uri: ""
  }
])

@Injectable()
export class SideMenuRoutesService {
  getAdminRoutes(): Observable<SideMenuNode[]> {
    return ADMIN_ROUTES;
  }

  getOntecRoutes(): Observable<SideMenuNode[]> {
    return ONTEC_ROUTES;
  }
}