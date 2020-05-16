import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularMaterialComponentModule } from "./angular-material-component/angular-material-component.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { ToastaModule } from "ngx-toasta";
import { environment } from "src/environments/environment";
import { NotFoundComponent } from "./not-found/not-found.component";
import { TruncatePipe } from "../core/pipes/truncate.pipe";
 @NgModule({
  declarations: [TruncatePipe, LoadingSpinnerComponent, NotFoundComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularMaterialComponentModule,
    FormsModule,
     ToastaModule.forRoot()
  ],
  exports: [
    FormsModule,
    AngularMaterialComponentModule,
    LoadingSpinnerComponent,
    ToastaModule,
    TruncatePipe,
   ],
  providers: [AngularFirestore]
})
export class SharedModule {}
