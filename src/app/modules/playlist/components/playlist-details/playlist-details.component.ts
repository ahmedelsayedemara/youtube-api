import { Component, OnInit } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { YoutubeModel } from "src/app/core/interfaces/Youtube";
import { ActivatedRoute } from "@angular/router";
import { YoutubeService } from "src/app/core/services/youtube.service";
import { FavoritesService } from "src/app/core/services/favorites.service";
import { ToastService } from "src/app/core/services/toast.service";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-playlist-details",
  templateUrl: "./playlist-details.component.html",
  styleUrls: ["./playlist-details.component.scss"]
})
export class PlaylistDetailsComponent implements OnInit {
  videoURL: SafeResourceUrl;
  video: YoutubeModel;
  favoriteStatus: boolean = false;
  ratingValue: number = 0;
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private youtubeService: YoutubeService,
    private favoriteService: FavoritesService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    const videoId = this.route.snapshot.paramMap.get("id");
    this.getYoutubeVideo(videoId);
    this.showVideoIframe(videoId);
    this.getRating(videoId);
    this.getVideoFavorite(videoId);
  }

  private showVideoIframe(videoId) {
    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + videoId
    );
  }

  // get video of youtube
  private getYoutubeVideo(videoId: string) {
    this.youtubeService
      .getYoutubeVideo(videoId)
      .subscribe((video: YoutubeModel) => {
        this.video = video.items[0];
      });
  }

  // convert ISO 8601 time format into normal time duration
  convertISOToSeconds(input) {
    if (input)
      return input
        .replace("PT", "")
        .replace("H", ":")
        .replace("M", ":")
        .replace("S", "");
  }

  // add or remove favorites
  addToFavorite(video: YoutubeModel) {
    this.favoriteStatus = !this.favoriteStatus;
    if (this.favoriteStatus) {
      this.favoriteService
        .addToFavorite(video)
        .then(() =>
          this.toastService.addToast("added successfully", "Success")
        );
    } else {
      this.favoriteService.removeFavorites(video.id);
      this.toastService.addToast("removed successfully", "Success");
    }
  }

  // add rate
  // onRate(videoId, $event) {
  //   // this.favoriteService.addRate(videoId, $event.newValue);
  // }

  // get rating
  private getRating(videoId) {
    this.favoriteService.getVideoRate(videoId).subscribe(
      (rating: YoutubeModel) => {
        if (rating) {
          this.ratingValue = rating.ratingValue;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  // get get video favorite
  private getVideoFavorite(videoId) {
    this.favoriteService.getVideoFavorite(videoId).subscribe(
      (favorite: YoutubeModel) => {
        if (favorite) {
          this.favoriteStatus = favorite.favorite;
        } else {
          this.favoriteStatus = false;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
