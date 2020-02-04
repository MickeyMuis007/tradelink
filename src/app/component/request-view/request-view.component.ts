import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RequestService } from 'src/app/services/request.service';
import { RequestModel } from '../request/request.model';

@Component({
  selector: "app-request-view",
  templateUrl: "./request-view.component.html",
  styleUrls: ["./request-view.component.scss"]
})
export class RequestViewComponent implements OnInit {
  request: RequestModel;

  constructor(private route: ActivatedRoute, private requestService: RequestService) { }

  ngOnInit() {
    this.init();
    const id = this.route.snapshot.queryParams.id;
    this.requestService.getById(id).subscribe(request => {
      this.request = request;
    })
  }

  private init() {
    this.request = {
      number: "",
      id: "",
      date: null,
      active: false,
      provider: {
        name: "",
        contact: {
          name: "",
          emailAddress: "",
          telephoneNumber: ""
        }
      },
      transactons: []
    }
  }
}