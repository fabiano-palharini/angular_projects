import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthKeys } from '../../auth.keys';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


@Injectable({providedIn: 'root'})
export class AuthService {
  apiKey: string;
  signUpUrl: string;
  signInUrl: string;

  constructor(private http: HttpClient) {
    this.apiKey = AuthKeys.KEY;
    this.signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
    this.signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`
  }

  signUp(email: string, password: string) {
    console.log(this.signUpUrl);
    return this.http.post<AuthResponseData>(this.signUpUrl,
              {
                email: email,
                password: password,
                returnSecureToken: true
              }
            ).pipe(
              catchError(this.handleError)
            );
  }


  signIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.signInUrl,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorResponse:HttpErrorResponse) {
    let errorMessage = 'An error occurred!';

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }

    return throwError(errorMessage);
  }
}
