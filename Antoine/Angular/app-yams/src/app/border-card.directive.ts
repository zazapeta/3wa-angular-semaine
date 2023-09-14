import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  private nativeStyle: string = ""
  @Input('appBorderCard') borderColor!: string

  constructor(private el: ElementRef) { }


  @HostListener('mouseenter') OnPastrieCard() {
    this.nativeStyle = this.el.nativeElement.style.border
    this.setBorder(this.borderColor);
  }
  @HostListener('mouseleave') OutPastrieCard() {
    this.el.nativeElement.style.border = this.nativeStyle
  }
  setBorder(color: string | null): void {
    this.el.nativeElement.style.border = `1px solid ${color}`
  }


}
