import { Component } from "@angular/core";
import { MaterialGridMenu } from './model/material-grid-menu.model';

@Component({
  selector: "material-demo-root",
  templateUrl: "./material.container.html",
  styleUrls: ["./material.container.scss"]
})
export class MaterialContainer {
  title = "Material Demo";

  tiles: MaterialGridMenu[] = [
    { name: "Side Nav", uri: "side-nav", cols: 2, rows: 2, color: "lightblue"},
    { name: "One", uri: "", cols: 2, rows: 1, color: "lightblue"},
    { name: "One", uri: "", cols: 2, rows: 1, color: "lightblue"},
    { name: "One", uri: "", cols: 2, rows: 1, color: "lightblue"},
  ]
}