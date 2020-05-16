import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { ToastService } from "../services/toast.service";

@Injectable({
  providedIn: "root"
})
export class ErrorHandlerService {
  constructor(private router: Router, private toast: ToastService) {}

  public onCatch(response: any, source: Observable<any>): Observable<any> {
    switch (response.status) {
      case 400:
        this.handleBadRequest(response);
        break;

      case 401:
        this.handleUnauthorized(response);
        break;

      case 403:
        this.handleForbidden();
        break;

      case 404:
        this.handleNotFound(response);
        break;

      case 500:
        this.handleServerError();
        break;

      default:
        break;
    }

    return throwError(response);
  }

  private handleBadRequest(responseBody: any): void {
    this.handleServerError();
  }

  private handleUnauthorized(responseBody: any): void {
    this.toast.addToast("ServerError 401 Unauthorized", "Error");
  }

  private handleForbidden(): void {
    this.toast.addToast("ServerError 403 Fobidden", "Error");
  }

  private handleNotFound(responseBody: any): void {
    this.toast.addToast("ServerError 404 Not Found", "Error");
  }

  private handleServerError(): void {
    this.toast.addToast("ServerError 500 Internal Server Error", "Error");
  }
}
