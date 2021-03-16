import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
              catchError(errorReponse => {
                let errorMessage = 'An error occurred!';

                if (!errorReponse.error || !errorReponse.error.error) {
                  return throwError(errorMessage);
                }
                switch (errorReponse.error.error.message){
                  case 'EMAIL_EXISTS':
                    errorMessage = 'This email already exists';
                }

                return throwError(errorMessage);
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
    );
  }
}
