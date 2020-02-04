import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, NgForm } from "@angular/forms";
import { RequestModel } from '../request/request.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: "app-request-detail",
  templateUrl: "./request-detail.component.html",
  styleUrls: ["./request-detail.component.scss"]
})
export class RequestDetailComponent implements OnInit {
  requestForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private requestService: RequestService) { }

  ngOnInit() {
    this.initForm();
  }

  save(form: NgForm) {
    if (this.requestForm.valid) {
      const requestModel = this.requestForm.value as RequestModel
      console.log(requestModel);
      this.requestService.addRequest(requestModel).subscribe(item => {
        form.resetForm();
      });
    }
  }

  addTransaction() {
    const transaction = this.requestForm.get("transactions") as FormArray;
    if (transaction.valid)
      transaction.push(this.createTransactionItem());
  }

  clear(form: NgForm) {
    form.resetForm(); 
  }

  private initForm() {
    this.requestForm = this.formBuilder.group({
      "number": this.formBuilder.control("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      "date": this.formBuilder.control("", Validators.required),
      "active": this.formBuilder.control(false),
      "transactions": this.formBuilder.array([
        this.createTransactionItem()
      ]),
      "provider": this.formBuilder.group({
        "name": this.formBuilder.control("", Validators.required),
        "contact": this.formBuilder.group({
          "name": this.formBuilder.control("", Validators.required),
          "telephoneNumber": this.formBuilder.control(""),
          "emailAddress": this.formBuilder.control("", [Validators.required, Validators.email])
        })
      })
    })
  }

  private createTransactionItem() {
    return this.formBuilder.group({
      "type": new FormControl("", Validators.required),
      "number": new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      "date": new FormControl("", Validators.required)
    })
  }
}