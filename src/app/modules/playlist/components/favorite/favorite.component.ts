import { Component, OnInit, OnDestroy } from "@angular/core";
import { FavoritesService } from "src/app/core/services/favorites.service";
import { LoaderService } from "src/app/core/services/loader.service";
import { ToastService } from "src/app/core/services/toast.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"]
})
export class FavoriteComponent implements OnInit, OnDestroy {
  youtubeList = [];
  subscription: Subscription;

  constructor(
    private favoriteService: FavoritesService,
    private loaderService: LoaderService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.getYoutubePlaylist();
  }

  // get youtube playlist
  private getYoutubePlaylist() {
    this.loaderService.show();
    this.subscription = this.favoriteService.getFavorites().subscribe(
      list => {
        this.loaderService.hide();
        this.youtubeList = list;
      },
      error => {
        this.loaderService.hide();
        this.toastService.addToast("Error", "Error");
      }
    );
  }

  // remove favorite
  removeFavorites(id) {
    this.favoriteService.removeFavorites(id);
    this.toastService.addToast("removed successfully", "Success");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
