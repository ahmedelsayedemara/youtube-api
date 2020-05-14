import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
  

const routes: Routes = [
  {
    path: "",
    component: PlaylistListComponent
  },
  {
    path: "details/:id",
    component: PlaylistDetailsComponent
  },
  {
    path: "favorite",
    component: FavoriteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
