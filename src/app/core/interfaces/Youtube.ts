export interface YoutubeModel {
  id?: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    resultsPerPage?: number;
    totalResults?: number;
  };
  items?: any;
  snippet?: SnippetModel;
  statistics?: {
    viewCount?: string;
    likeCount?: string;
    favoriteCount?: string;
  };
  contentDetails?: {
    duration?: string;
    videoPublishedAt?: string;
  };
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
