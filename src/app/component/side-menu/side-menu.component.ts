import { Component, OnInit } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree"

import { SideMenuNode } from "./model/side-menu-node.model";
import { FlatTreeNode } from "src/app/common/model/flat-tree/flat-tree-node";

const TREE_DATA: SideMenuNode[] = [
  {
    name: "Material",
    uri: "material",
    children: [
      { name: "Side Nav", uri: "material/side-nav" }
    ]
  }, {
    name: "MDB",
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
]

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

  constructor() { }

  ngOnInit() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FlatTreeNode) => node.expandable;
 }