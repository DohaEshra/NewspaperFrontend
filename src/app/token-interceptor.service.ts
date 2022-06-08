import { LoginService } from './login.service';
import { Injectable, Injector } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
        let logSer= this.injector.get(LoginService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${logSer.getToken()} `
      }
    })
    return  next.handle(tokenizedReq)
  }
}
