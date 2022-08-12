import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]',
})
export class ImgBrokenDirective {
  @HostListener('error') handleError() {
    this.host.nativeElement.src =
      'https://img.freepik.com/vector-gratis/ilustracion-concepto-uy-error-404-robot-roto_114360-1932.jpg?w=740&t=st=1660341885~exp=1660342485~hmac=baff9b581563a060d1265276be1e1c4b25ab9ee2f08757df12556da02af99ba7';
    console.log('Error', this.host.nativeElement);
  }

  constructor(private host: ElementRef) {}
}
