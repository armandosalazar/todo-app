import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacePipe } from './pipes/replace-space.pipe';



@NgModule({
  declarations: [
    ReplaceSpacePipe
  ],
  exports: [
    ReplaceSpacePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ReplaceSpacePipe
  ]
})
export class SharedModule { }
