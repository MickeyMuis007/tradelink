import { Component } from "@angular/core";

@Component({
  selector: "material-demo-root",
  templateUrl: "./material-demo.container.html",
  styleUrls: ["./material-demo.container.scss"]
})
export class MaterialDemoContainer {
  title = "Material Demo";
  showFilter = false;
}