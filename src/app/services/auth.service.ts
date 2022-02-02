import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Token, User } from '../interface';
import { catchError, map, retry, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
   login = '/labs-login';
   otpverify = '/labs/otp-verification';
   forgotpassword='/labs/labs-forgot-password';
   resetpassword='/labs/reset-password';
   changepassword='/labs/labs-change-password';
   otpresend='/labs/otp-resend';
  constructor(private http: HttpClient) {}

  httpOption = {
    headers: new HttpHeaders({}),
  };
  
  httpOptions = {
    headers: new HttpHeaders({
      auth:localStorage.getItem("token")
    }),
  };

  signIn = (params: string): Observable<{data: User[]; tokens: Token;  status: string; message: string;}> => {
    return this.http.post<{data: User[]; tokens: Token;  status: string; message: string;}[]>(this.login, JSON.parse(params), this.httpOption)
      .pipe(map((r) => r[0]),shareReplay(),retry(2),catchError(this.handleError));
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
  
   verifyOtp = (params: string): Observable<{data: User[]; tokens: Token;  status: string; message: string;}> => {
    return this.http.post<{data: User[]; tokens: Token;  status: string; message: string;}[]>(this.otpverify,params,this.httpOption)
      .pipe(map((r) => r[0]),shareReplay(),retry(2),catchError(this.handleError));
  };

  otpResend = (params: string): Observable<{data: User[]; tokens: Token;  status: string; message: string;}> => {
    return this.http.post<{data: User[]; tokens: Token;  status: string; message: string;}[]>(this.otpresend,params,this.httpOptions)
      .pipe(map((r) => r[0]),shareReplay(),retry(2),catchError(this.handleError));
  };

  forgotPassword = (params: string): Observable<{data: User[]; tokens: Token;  status: string; message: string;}> => {
    return this.http.post<{data: User[]; tokens: Token;  status: string; message: string;}[]>(this.forgotpassword,params,this.httpOption)
      .pipe(map((r) => r[0]),shareReplay(),retry(2),catchError(this.handleError));
  };

  resetPassword(payload: any): Observable<any> {
    // console.log(this.httpOptions)
    return this.http.post<any>(this.resetpassword, payload, this.httpOptions)
      .pipe(map((r) => r), catchError(this.handleError));
  };
  
  changePassword = (params: string): Observable<{data: User[]; tokens: Token;  status: string; message: string;}> => {
    return this.http.post<{data: User[]; tokens: Token;  status: string; message: string;}[]>(this.changepassword,params,this.httpOptions)
      .pipe(map((r) => r[0]),shareReplay(),retry(2),catchError(this.handleError));
  };


  saveTokenToStorage(data: any): void {
    localStorage.setItem('id_token', data);
  }
}
