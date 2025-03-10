import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthKeys } from '../../auth.keys';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

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
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;


  constructor(private http: HttpClient, private router: Router) {
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
              catchError(this.handleError),
              tap(responseData => {
                this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
              })
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
      catchError(this.handleError),
      tap(responseData => {
        this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
      })
    );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }


  autoLogin() {
    const userData : {email: string; id: string; _token: string, _tokenExpirationDate: string} = JSON.parse(localStorage.getItem('userData'));
    if (!userData){
      return;
    }

    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =  new Date(Date.parse(userData._tokenExpirationDate)).getTime() - new Date().getTime()
      this.autoLogout(expirationDuration);
    }
  }


  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }


  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
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
