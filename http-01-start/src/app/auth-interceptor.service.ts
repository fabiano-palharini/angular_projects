import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // req.url
    console.log('request is on its way!');
    return next.handle(req); //next.handle is a method that allows the request to continue its journey
  }

}
