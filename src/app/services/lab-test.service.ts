import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export enum LabtESTSEndpoints {
  GET_MY_LAB_TESTS = "/labs/my-lab-tests/",
  GET_DIA_LIST = "/labs/get-diagnosis-list"
}

@Injectable({
  providedIn: 'root'
})
export class LabTestService {


  constructor(
    private http: HttpClient
  ) { }
  httpOptions = {
    headers: new HttpHeaders({
      auth: localStorage.getItem("token")
    }),
  };

  // ErrorHandling
  handleError = (error: {
    error: { messages: string };
    status: any;
    messsage: any;
  }) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.messages;
    } else {
      errorMessage = `Error Code : ${error.status}\nMessage : ${error.messsage}`;
    }
    return throwError(errorMessage);
  };

  // GET MT LAB TESTS
  getMyLabTests(payload: any): Observable<any> {
    return this.http.post<any>(LabtESTSEndpoints.GET_MY_LAB_TESTS, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }

  // get-diagnosis-list

  getDiagnosisList(payload: any): Observable<any> {
    return this.http.post<any>(LabtESTSEndpoints.GET_DIA_LIST, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }
}
