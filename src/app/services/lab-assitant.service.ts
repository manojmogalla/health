import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

export enum LabAssitantEndpoints {
  LAB_ASSITANT_LIST = '/labassistant/list-labassistant',
  ADD_ASSITANT = '/labassistant/add-labassistant',
  EDIT_ASSISTANT = '/labassistant/update-labassistant/',
  ASSISTANT_STATUS = "/labassistant/update-status-labassistant/",
  DELETE_ASSISTANT = "/labassistant/delete-labassistant/"
}

@Injectable({
  providedIn: 'root'
})
export class LabAssitantService {

    constructor(private http: HttpClient) { }
      httpOptions = {
        headers: new HttpHeaders({
          auth:localStorage.getItem("token")
        }),
      };

     selectedAssistant$ = new BehaviorSubject<any>(null);

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


  addAssitant(payload: any): Observable<any> {
    return this.http.post<any>(LabAssitantEndpoints.ADD_ASSITANT, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }
  editAssistant(payload: any): Observable<any> {
    return this.http.post<any>(LabAssitantEndpoints.EDIT_ASSISTANT, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }

  getAssitantList(payload:any): Observable<any> {
    return this.http.post<any>(LabAssitantEndpoints.LAB_ASSITANT_LIST, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }

  changeAssitantStatus(payload:any): Observable<any> {
    return this.http.post<any>(LabAssitantEndpoints.ASSISTANT_STATUS, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }
  deleteAssistant(payload:any): Observable<any> {
    return this.http.post<any>(LabAssitantEndpoints.DELETE_ASSISTANT, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  }


}
