import { YoutubeModel } from "./../interfaces/Youtube";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  constructor(private Http: HttpClient) {}

  private url = "https://www.googleapis.com/youtube/v3/";

  // get youtube list
  getYoutubePlayList(
    playlistId: string,
    nextPageToken = "",
    prevPageToken = ""
  ) {
    const params = new HttpParams()
      .set("part", "snippet,contentDetails")
      .set("playlistId", playlistId)
      .set("pageToken", prevPageToken)
      .set("pageToken", nextPageToken);
    // .set("maxResults", "50");
    return this.Http.get<YoutubeModel>(this.url + "playlistItems", {
      params
    });
  }

  // get video details
  getYoutubeVideo(videoId: string) {
    const params = new HttpParams()
      .set("part", "snippet,statistics,contentDetails")
      .set("id", videoId);
    return this.Http.get<YoutubeModel>(this.url + "videos", {
      params
    });
  }
}
