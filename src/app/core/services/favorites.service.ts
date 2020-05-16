import { YoutubeModel } from "./../interfaces/Youtube";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  constructor(private firestore: AngularFirestore) {}

  // get all favorites
  getFavorites() {
    return this.firestore.collection("favorites").valueChanges();
  }

  // get video from favorite
  getVideoFavorite(videoId: string) {
    const docRef = this.firestore.collection("favorites").doc(videoId);
    return docRef.valueChanges();
  }

  // add video to favorite
  addToFavorite(video: YoutubeModel) {
    return this.firestore
      .collection("favorites")
      .doc(video.id)
      .set({
        favorite: true,
        contentDetails: {
          videoPublishedAt: video.snippet.publishedAt
        },
        snippet: {
          title: video.snippet.title,
          description: video.snippet.description,
          thumbnails: video.snippet.thumbnails,
          resourceId: {
            videoId: video.id
          }
        }
      });
  }

  // remove video from favorites
  removeFavorites(id: string) {
    return this.firestore
      .collection("favorites")
      .doc(id)
      .delete();
  }

  // add rating
  addRate(videoId: any, ratingValue: number) {
    return this.firestore
      .collection("rating")
      .doc(videoId)
      .set({
        ratingValue
      });
  }

  // get rate
  getVideoRate(videoId: string) {
    const docRef = this.firestore.collection("rating").doc(videoId);
    return docRef.valueChanges();
  }
}
