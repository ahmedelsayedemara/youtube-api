import { Injectable } from "@angular/core";
import { ToastaService, ToastOptions } from "ngx-toasta";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  constructor(private toastaService: ToastaService) {}
  addToast(
    message: string,
    type?: "Info" | "Success" | "Wait" | "Error" | "Warning" | "Default",
    title?: string,
    options?: ToastOptions
  ) {
    const toastOptions: ToastOptions = options || {
      title: title || type !== "Default" ? type.toUpperCase() : "",
      msg: message,
      showClose: true,
      timeout: 5000,
      theme: "bootstrap", // default, bootstrap, material
      showDuration: true
    };

    switch (type) {
      case "Info":
        this.toastaService.info(toastOptions);
        break;
      case "Success":
        this.toastaService.success(toastOptions);
        break;
      case "Wait":
        this.toastaService.wait(toastOptions);
        break;
      case "Error":
        this.toastaService.error(toastOptions);
        break;
      case "Warning":
        this.toastaService.warning(toastOptions);
        break;
      default:
        this.toastaService.default(toastOptions);
        break;
    }
  }
}
