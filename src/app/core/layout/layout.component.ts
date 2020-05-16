import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "../services/favorites.service";
import { LoaderService } from "../services/loader.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  youtubeList = [];
  constructor(
    private favoriteService: FavoritesService,
    private loaderService: LoaderService
  ) {}
  ngOnInit() {
    this.getYoutubePlaylist();
  }

  // get youtube playlist
  private getYoutubePlaylist() {
    this.loaderService.show();
    this.favoriteService.getFavorites().subscribe(
      list => {
        this.loaderService.hide();
        this.youtubeList = list;
      },
      error => {
        this.loaderService.hide();
      }
    );
  }
}
