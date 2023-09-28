import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AlertifyService, MessageType, Position } from 'src/app/services/alertify/alertify.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private alertify:AlertifyService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((errorresponse:HttpErrorResponse)=>{
      return throwError(()=>{
        this.alertify.message(errorresponse.message,{ messageType: MessageType.Error, position: Position.TopCenter, delay: 2 })
      })
    }));
  }
}
