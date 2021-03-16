import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthKeys } from '../../auth.keys';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}


@Injectable({providedIn: 'root'})
export class AuthService {
  apiKey: string;
  url: string;

  constructor(private http: HttpClient) {
    this.apiKey = AuthKeys.KEY;
    this.url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
  }

  signUp(email: string, password: string) {
    console.log(this.url);
    return this.http.post<AuthResponseData>(this.url,
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
}
