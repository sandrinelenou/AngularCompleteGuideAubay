import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";
//[] significa che verra riconsciuto come stile di attributo avunque sara agguinto senza parentesi quadre a un elemento
@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective{

  arrayColors = ['blue','lightblue','coral', 'pink','green','lightyellow','gray','purple'];

  constructor(private el: ElementRef){
    el.nativeElement.style.backgroundColor = 'gray'; //non è un methode migliore
  }

  @HostBinding('style.backgroundColor') bg= 'yellow'; //couleur de depart
  @HostListener('mouseenter') mouseenter(){
    this.bg = 'green'; //couleur de prend le paragraphe lorsquil detecte le curseur sur lelement
  }
  @HostListener('mouseleave') mouseleave(){
    this.bg = 'red';
  }

  @HostBinding('style.borderColor') bc: any;
  @HostBinding('style.color') color : any;
  @HostListener('keypress') changeColor(){
    const index = Math.floor(Math.random()* (this.arrayColors.length -1));
  this.bc = this.arrayColors[index];
  this.color = this.arrayColors[index];
  }


}
