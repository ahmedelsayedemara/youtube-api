import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { YoutubeModel } from "src/app/core/interfaces/Youtube";
import { YoutubeService } from "src/app/core/services/youtube.service";
import { ToastService } from "src/app/core/services/toast.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-playlist-list",
  templateUrl: "./playlist-list.component.html",
  styleUrls: ["./playlist-list.component.scss"]
})
export class PlaylistListComponent implements OnInit, OnDestroy {
  listData = new MatTableDataSource<YoutubeModel>();
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  private playlistId: string =
    localStorage.getItem("playlistId") || "PLF75bDBd1tIdwQq6TNd-wNx0AcB8JPeDK";
  subscription: Subscription[] = [];
  displayedColumns: string[] = ["image", "title", "videoPublishedAt", "action"];
  playListUrl: string;
  youtubeList: YoutubeModel;

  constructor(
    private youTubeServices: YoutubeService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    // this.getYoutubePlaylist();
    this.checkInternetStatus();
    console.log(this.listData);
  }

  // get youtube playlist
  private getYoutubePlaylist(next = "", prev = "") {
    this.subscription.push(
      this.youTubeServices
        .getYoutubePlayList(this.playlistId, next, prev)
        .subscribe((list: YoutubeModel) => {
          let data = this.listMap(list.items);
          this.listData = new MatTableDataSource(data);
          this.youtubeList = list;
          localStorage.setItem("youtubeList", JSON.stringify(list));
          this.setDataSourceAttributes();
        })
    );
  }

  // get youtube playlist
  private setDataSourceAttributes() {
    this.listData.paginator = this.paginator;
    this.listData.sort = this.sort;
  }

  // add new playlist
  addNewUrlPlaylist(url) {
    const validUrl = this.getYoutubePlaylistId(url);
    if (validUrl) {
      this.playlistId = validUrl;
      localStorage.setItem("playlistId", validUrl);
      this.getYoutubePlaylist();
      this.playListUrl = "";
    } else {
      this.toastService.addToast("Please select a valid playlist", "Error");
    }
  }

  //get playlist id from url
  private getYoutubePlaylistId(url) {
    const id = /[&|\?]list=([a-zA-Z0-9_-]+)/gi.exec(url);
    return id && id.length > 0 ? id[1] : null;
  }

  // handler search
  handlerSearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  // map data
  listMap(array: any) {
    const data = array.map(content => {
      return {
        id: content.snippet.resourceId.videoId,
        image: content.snippet.thumbnails.default.url,
        title: content.snippet.title,
        videoPublishedAt: content.contentDetails.videoPublishedAt
      };
    });
    return data;
  }

  // check internet status
  private checkInternetStatus() {
    if (navigator.onLine) {
      this.getYoutubePlaylist();
    } else {
      if (localStorage.getItem("youtubeList")) {
        let youtube = JSON.parse(
          localStorage.getItem("youtubeList")
        ) as YoutubeModel;
        this.youtubeList = youtube;
        let data = this.listMap(youtube.items);
        this.listData = new MatTableDataSource(data);
        this.setDataSourceAttributes();
      }
    }
  }

  // pagination
  nextPage() {
    const next = this.youtubeList.nextPageToken;
    if (next) {
      this.getYoutubePlaylist(next);
    }
  }
  prevPage() {
    const prev = this.youtubeList.prevPageToken;
    if (prev) {
      this.getYoutubePlaylist(prev);
    }
  }

  ngOnDestroy() {
    this.subscription.forEach(x => x.unsubscribe());
  }
}
