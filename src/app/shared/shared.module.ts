import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularMaterialComponentModule } from "./angular-material-component/angular-material-component.module";
// import { RatingModule } from "ng-starrating";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { ToastaModule } from "ngx-toasta";
import { environment } from "src/environments/environment";
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [LoadingSpinnerComponent, NotFoundComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularMaterialComponentModule,
    // RatingModule,
    FormsModule,
    ToastaModule.forRoot()
  ],
  exports: [
    AngularMaterialComponentModule,
    // RatingModule,
    LoadingSpinnerComponent,
    ToastaModule
  ],
  providers: [AngularFirestore]
})
export class SharedModule {}
