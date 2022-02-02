import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const LabAssitantEndpoints = {
  FETCH_APPOINMENTS: `${environment.baseUrl}/appointment/lab-appointments/`,
  COMPLETE_APPOINMENT: `${environment.baseUrl}/appointment/complete-appointment/`,
  ASSIGN_ASSISTANT: `${environment.baseUrl}/appointment/assign-assistant/`,
};

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      auth: localStorage.getItem('token'),
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

  fetchAppoinmentList(payload: any): Observable<any> {
    return this.http
      .post<any>(
        LabAssitantEndpoints.FETCH_APPOINMENTS,
        payload,
        this.httpOptions
      )
      .pipe(
        map((r) => r),
        catchError(this.handleError)
      );
  }

  completeAppoinment(payload: any): Observable<any> {
    return this.http
      .post<any>(
        LabAssitantEndpoints.COMPLETE_APPOINMENT,
        payload,
        this.httpOptions
      )
      .pipe(
        map((r) => r),
        catchError(this.handleError)
      );
  }

  assignAssistant(payload: any): Observable<any> {
    return this.http
      .post<any>(
        LabAssitantEndpoints.ASSIGN_ASSISTANT,
        payload,
        this.httpOptions
      )
      .pipe(
        map((r) => r),
        catchError(this.handleError)
      );
  }
}
