import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

export enum LabCenterEndpoints {
  LAB_CENTERS_LIST = '/labcenters/list-labcenter',
  ADD_CENTER = '/labcenters/add-labcenter',
  EDIT_CENTER = '/labcenters/update-labcenter/',
  DEACTIVATE_CENTER = "/labcenters/update-status-labcenter/",
  DELETE_CENTER = "/labcenters/delete-labcenter/",
  CITIES_LIST = "/masters/get-city-list/"
}
@Injectable({
  providedIn: 'root'
})
export class LabCenterService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      auth:localStorage.getItem("token")
    }),
  };

  selectedCenter$ = new BehaviorSubject<any>(null);



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

  addCenter(payload: any): Observable<any> {
    return this.http.post<any>(LabCenterEndpoints.ADD_CENTER, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }
  editCenter(payload: any): Observable<any> {
    return this.http.post<any>(LabCenterEndpoints.EDIT_CENTER, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }

  getCenterList(payload:any): Observable<any> {
    return this.http.post<any>(LabCenterEndpoints.LAB_CENTERS_LIST, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }

  deActivateCenter(payload:any): Observable<any> {
    return this.http.post<any>(LabCenterEndpoints.DEACTIVATE_CENTER, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }
  deleteCenter(payload:any): Observable<any> {
    return this.http.post<any>(LabCenterEndpoints.DELETE_CENTER, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }
  
  getCitiesList(payload){
    return this.http.post<any>(LabCenterEndpoints.CITIES_LIST, payload)
      .pipe(map((r) => r), catchError(this.handleError));
  }
  

}
