import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacePipe } from './pipes/replace-space.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';

@NgModule({
  declarations: [ReplaceSpacePipe, ImgBrokenDirective],
  exports: [ReplaceSpacePipe, ImgBrokenDirective],
  imports: [CommonModule],
  providers: [ReplaceSpacePipe],
})
export class SharedModule {}
