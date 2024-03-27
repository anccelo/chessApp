import { Directive,  ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[chsBorderCaseChessboardLightWood]'
})
export class BorderCaseChessboardLightWoodDirective {

  private initialColor: string  =  '#fff8dc';
  private defaultColor: string  = '#009688';
  private defaulHeight: number  = 180;

  constructor(private el: ElementRef) { 
    
    this.setBorder(this.initialColor);
    this.setHeight(this.defaulHeight);
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
   }

   private setBorder(color: string ){
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;

  }

  private setHeight(height: number ){
     height + 'px';
  }


}
