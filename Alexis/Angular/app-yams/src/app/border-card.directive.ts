import { Directive, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective 
{
  @Input('appBorderCard') mBorderColor!:string;

  constructor(private _el:ElementRef) { }

  setBorder(_color:string)
  {
    this._el.nativeElement.style.border = `1px solid ${_color}`;
  }

  @HostListener('mouseenter') 
  OnMouseEnter() 
  {
    this.setBorder(this.mBorderColor);
  }

  @HostListener('mouseleave') 
  OnMouseLeave() 
  {
    this._el.nativeElement.style.border = ``;
  }

}
