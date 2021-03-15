import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}


@Injectable({providedIn: 'root'})
export class AuthService {
  apiKey = 'AIzaSyDdhG9JLy51R7B9JdIX8mxuDx1SOkSdQj4';
  url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`

  constructor(private http: HttpClient) {}

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
