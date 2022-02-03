import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {
  private elementSelected = false;
  @Input()
  toolTip:any;
 
  elToolTip: any;
  constructor(private el: ElementRef,
    private renderer: Renderer2) { }
    @HostListener('mouseenter') 
  onMouseEnter() {
    if (!this.elToolTip) { this.showHint(); }
  }
 
  @HostListener('mouseleave') 
  onMouseLeave() {
    if (this.elToolTip) { this.removeHint(); }
  }
 ngOnInit(){

 }
 removeHint() {
  this.renderer.removeClass(this.elToolTip, 'tooltip');
  this.renderer.removeChild(document.body, this.elToolTip);
  this.elToolTip = null;
}

showHint() {

  this.elToolTip = this.renderer.createElement('span');
  const text = this.renderer.createText(this.toolTip);
  this.renderer.appendChild(this.elToolTip, text);

  this.renderer.appendChild(document.body, this.elToolTip);
  this.renderer.addClass(this.elToolTip, 'toolTip');
  
  let hostPos = this.el.nativeElement.getBoundingClientRect();
  let tooltipPos= this.elToolTip.getBoundingClientRect();

  let top = hostPos.bottom+10 ; 
  let left = hostPos.left;

  this.renderer.setStyle(this.elToolTip, 'top', `${top}px`);
  this.renderer.setStyle(this.elToolTip, 'left', `${left}px`);
}
@HostListener('click')
  private onClick() {
    this.elementSelected = !this.elementSelected;
    if (this.elementSelected) {
      this.el.nativeElement.classList.add('toggle')
    } else {
      this.el.nativeElement.classList.remove('toggle')
    }
}


}