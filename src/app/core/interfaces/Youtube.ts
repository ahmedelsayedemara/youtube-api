export interface YoutubeModel {
  id?: string;
  nextPageToken?: string;
  prevPageToken?: string;
  items?: [any];
  snippet?: SnippetModel;
  statistics?: Statistics;
  contentDetails?: ContentDetails;
  ratingValue?: number;
  favorite?: boolean;
}

export interface SnippetModel {
  publishedAt?: string;
  channelId?: string;
  title?: string;
  description?: string;
  playlistId?: string;
  channelTitle?: string;
  thumbnails?: object;
}

export interface Statistics {
  viewCount?: string;
  likeCount?: string;
  favoriteCount?: string;
}
export interface ContentDetails {
  duration?: string;
  videoPublishedAt?: string;
}
