import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { finalize, catchError } from "rxjs/operators";
import { LoaderService } from "../services/loader.service";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptor implements HttpInterceptor {
  private key = "AIzaSyCEVlf9er65vXxpjSJSBMokwLuQPDyIy3s";

  constructor(public loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show();
    request = request.clone({
      setParams: {
        key: this.key
      }
    });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errMsg = "";
        // Client Side Error
        if (error.error instanceof ErrorEvent) {
          errMsg = `Error: ${error.error.message}`;
        } else {
          // Server Side Error
          errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        return throwError(errMsg);
      }),
      finalize(() => {
        this.loaderService.hide();
      })
    );
  }
}
