import { Injectable } from "@angular/core";
import { RequestModel } from "../component/request/request.model";
import { Observable, of, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RequestService {
  requestList: RequestModel[];
  requestObserver: BehaviorSubject<RequestModel[]>
  url = "http://localhost:5000/request";

  constructor(private http: HttpClient) {
    this.requestList = [];
    this.requestObserver = new BehaviorSubject<RequestModel[]>(this.requestList);
  }

  getRequests(): Observable<RequestModel[]> {
    this.http.get(this.url).subscribe((items: RequestModel[]) => {
      this.requestList = items;
      this.requestObserver.next(this.requestList);
    })
    return this.requestObserver;
  }

  addRequest(requestModel: RequestModel): Observable<RequestModel> {
    this.requestList.push(requestModel);
    this.requestObserver.next(this.requestList);
    this.http.post(this.url, requestModel).subscribe((item: RequestModel) => {
      this.requestList.push(item);
      this.requestObserver.next(this.requestList);
    });
    return of(requestModel);
  }
}