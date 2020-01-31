import { Component, OnInit } from "@angular/core";
import { RequestService } from 'src/app/services/request.service';
import { RequestModel } from './request.model';

@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.scss"]
})
export class RequestComponent implements OnInit { 
  requestList: RequestModel[]

  constructor(private requestService: RequestService) { }
  
  ngOnInit() {
    this.loadRequests();
  }

  private loadRequests() {
    this.requestService.getRequests().subscribe(requests => {
      this.requestList = requests;
      console.log(requests);
    })
  }
}