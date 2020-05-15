import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { YoutubeModel } from "src/app/core/interfaces/Youtube";
import { YoutubeService } from "src/app/core/services/youtube.service";
import { ToastService } from "src/app/core/services/toast.service";

@Component({
  selector: "app-playlist-list",
  templateUrl: "./playlist-list.component.html",
  styleUrls: ["./playlist-list.component.scss"]
})
export class PlaylistListComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<YoutubeModel>();
  listData = new MatTableDataSource();
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  youtubeList: YoutubeModel;
  private playlistId: string =
    localStorage.getItem("playlistId") || "PLF75bDBd1tIdwQq6TNd-wNx0AcB8JPeDK";
  displayedColumns: string[] = ["image", "title", "videoPublishedAt", "action"];
  playListUrl: string;
 
  constructor(
    private youTubeServices: YoutubeService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.getYoutubePlaylist();
  }

  ngAfterViewInit() {
    this.setDataSourceAttributes();
  }

  // get youtube playlist
  private getYoutubePlaylist(next = "", prev = "") {
    this.youTubeServices
      .getYoutubePlayList(this.playlistId, next, prev)
      .subscribe((list: YoutubeModel) => {
        let data = list.items.map(content => {
          return {
            id: content.snippet.resourceId.videoId,
            image: content.snippet.thumbnails.default.url,
            title: content.snippet.title,
            videoPublishedAt: content.contentDetails.videoPublishedAt
          };
        });
        this.listData = new MatTableDataSource(data);
        this.youtubeList = list
        localStorage.setItem("youtubeList", JSON.stringify(list));
        this.setDataSourceAttributes();
      });
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

  // pagination
  nextPage() {
    let next = this.youtubeList.nextPageToken;
    if (next) {
      this.getYoutubePlaylist(next);
    }
  }
  prevPage() {
    let prev = this.youtubeList.prevPageToken;
    if (prev) {
      this.getYoutubePlaylist();
    }
  }

  //
  pageEvent($e) {
    console.log($e);
  }
}
