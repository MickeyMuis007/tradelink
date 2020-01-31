import { Injectable } from "@angular/core";
import { RequestModel } from "../component/request/request.model";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RequestService {
  requestList: RequestModel[];

  getRequests(): Observable<RequestModel[]> {
    return of(this.requestList);
  }

  addRequest(requestModel: RequestModel): Observable<RequestModel> {
    this.requestList.push(requestModel);
    return of(requestModel);
  }
}