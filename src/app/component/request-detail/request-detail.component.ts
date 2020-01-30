import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-request-detail",
  templateUrl: "./request-detail.component.html",
  styleUrls: ["./request-detail.component.scss"]
})
export class RequestDetailComponent implements OnInit{ 
  requestForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  save() {
    console.log(this.requestForm)
  }

  private initForm() {
    this.requestForm = new FormGroup({
      "name": new FormControl("", Validators.required),
      "date": new FormControl("", Validators.required),
      "active": new FormControl(false),
    })
  }
}