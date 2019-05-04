import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
