import { Injectable } from "@angular/core";
import { RequestModel } from "../component/request/request.model";
import { Observable, of, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RequestService {
  requestList: RequestModel[];
  requestObserver: BehaviorSubject<RequestModel[]>

  constructor() {
    this.requestList = [];
    this.requestObserver = new BehaviorSubject<RequestModel[]>(this.requestList);
  }

  getRequests(): Observable<RequestModel[]> {
    return this.requestObserver;
  }

  addRequest(requestModel: RequestModel): Observable<RequestModel> {
    this.requestList.push(requestModel);
    this.requestObserver.next(this.requestList);
    return of(requestModel);
  }
}