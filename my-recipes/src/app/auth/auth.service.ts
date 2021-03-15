import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthKeys } from '../../auth.keys';

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
            );
  }
}
