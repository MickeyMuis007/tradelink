import { Component, OnInit } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree"

import { SideMenuNode } from "./model/side-menu-node.model";
import { FlatTreeNode } from "src/app/common/model/flat-tree/flat-tree-node";

import { AppFacadeService } from "../../services/app-facade.service";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit {
  private _transformer = (node: SideMenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      uri: node.uri,
      level: level
    }
  };

  treeControl = new FlatTreeControl<FlatTreeNode>(
    node => node.level, node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private appFacadeService: AppFacadeService) { }

  ngOnInit() {
    this.appFacadeService.getAdminRoutes().subscribe(sideNodes => {
      this.dataSource.data = sideNodes;
    });
  }

  hasChild = (_: number, node: FlatTreeNode) => node.expandable;
 }