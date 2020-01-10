import { Injectable, Injector } from "@angular/core";

import { SideMenuRoutesService } from "./side-menu/side-menu-routes.service";

@Injectable()
export class AppFacadeService {
  static services = [SideMenuRoutesService];

  private _sideMenuRoutesService: SideMenuRoutesService;

  public get sideMenuRoutesService(): SideMenuRoutesService {
    if (!this._sideMenuRoutesService) {
      this._sideMenuRoutesService = this.injector.get(SideMenuRoutesService);
    }
    return this._sideMenuRoutesService;
  }

  constructor(private injector:Injector) { }

  /*********************************
   * SideMenuRoutesServices Methods
   *********************************/
  getAdminRoutes() {
    return this.sideMenuRoutesService.getAdminRoutes();
  }
  
}