import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlaylistRoutingModule } from "./playlist-routing.module";
import { PlaylistDetailsComponent } from "./components/playlist-details/playlist-details.component";
import { PlaylistListComponent } from "./components/playlist-list/playlist-list.component";
import { FavoriteComponent } from "./components/favorite/favorite.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    PlaylistListComponent,
    PlaylistDetailsComponent,
    FavoriteComponent
  ],
  imports: [CommonModule, PlaylistRoutingModule, SharedModule]
})
export class PlaylistModule {}
