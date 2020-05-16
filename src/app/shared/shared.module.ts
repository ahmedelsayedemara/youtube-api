import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularMaterialComponentModule } from "./angular-material-component/angular-material-component.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import {
  AngularFirestore,
  AngularFirestoreModule
} from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { RatingModule } from "ng-starrating";
import { ToastaModule } from "ngx-toasta";
import { environment } from "src/environments/environment";
import { TruncatePipe } from "../core/pipes/truncate.pipe";

@NgModule({
  declarations: [TruncatePipe, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularMaterialComponentModule,
    FormsModule,
    ToastaModule.forRoot(),
    RatingModule
  ],
  exports: [
    FormsModule,
    RatingModule,
    AngularMaterialComponentModule,
    LoadingSpinnerComponent,
    ToastaModule,
    TruncatePipe
  ],
  providers: [AngularFirestore]
})
export class SharedModule {}
