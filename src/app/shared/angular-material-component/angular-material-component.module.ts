import { NgModule } from "@angular/core";
import {
  MatSortModule,
  MatPaginatorModule,
  MatTableModule
} from "@angular/material";

@NgModule({
  exports: [MatTableModule, MatSortModule, MatPaginatorModule]
})
export class AngularMaterialComponentModule {}
