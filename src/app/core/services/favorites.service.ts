import { YoutubeModel } from "./../interfaces/Youtube";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  constructor(private firestore: AngularFirestore) {}

  getFavorites() {
    return this.firestore.collection("favorites").valueChanges();
  }

  getVideoFavorite(videoId: string) {
    const docRef = this.firestore.collection("favorites").doc(videoId);
    return docRef.valueChanges();
  }

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

  removeFavorites(id: string) {
    return this.firestore
      .collection("favorites")
      .doc(id)
      .delete();
  }

  addRate(videoId, ratingValue: number) {
    return this.firestore
      .collection("rating")
      .doc(videoId)
      .set({
        ratingValue
      });
  }

  getVideoRate(videoId: string) {
    const docRef = this.firestore.collection("rating").doc(videoId);
    return docRef.valueChanges();
  }
}
