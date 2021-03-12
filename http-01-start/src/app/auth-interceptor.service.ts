import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // req.url
    console.log(req.url);
    console.log('request ' + req.url + ' is on its way!');
    const modifiedRequest = req.clone({
      headers: req.headers.append('TEST', 'xyz')
    });
    // return next.handle(req); //next.handle is a method that allows the request to continue its journey
    return next.handle(modifiedRequest).pipe(
      tap( event => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log('REsponse arrived, body data: ');
          console.log(event.body);
        }
      })
    );
  }

}
