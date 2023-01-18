import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorPostService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    console.log("Interceptado");
    const newReq = req.clone({setHeaders:{
      Authorization: 'Interceptado 00039830'
    }})
    return next.handle(newReq)
  }

  constructor() { }
}
