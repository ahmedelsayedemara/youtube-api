import { Injectable, ErrorHandler } from "@angular/core";
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
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptor implements HttpInterceptor {
  private key = "AIzaSyCEVlf9er65vXxpjSJSBMokwLuQPDyIy3s";

  constructor(
    public loaderService: LoaderService,
    private errorHandler: ErrorHandlerService
  ) {}

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
      catchError((err, source) => this.errorHandler.onCatch(err, source)),
      finalize(() => this.loaderService.hide())
    );
  }
}
