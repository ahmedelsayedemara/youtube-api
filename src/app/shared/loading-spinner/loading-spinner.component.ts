import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { LoaderService } from "../../core/services/loader.service";

@Component({
  selector: "app-loading-spinner",
  templateUrl: "./loading-spinner.component.html",
  styleUrls: []
})
export class LoadingSpinnerComponent implements OnInit {
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoaderService) {}

  ngOnInit() {}
}
