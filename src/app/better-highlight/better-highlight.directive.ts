import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements  OnInit {

  @HostBinding('style.backgroundColor') backgroundColor! : string;

  constructor(private elRef : ElementRef,private renderer : Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','pink');
    this.backgroundColor = 'pink';
  }

  @HostListener('mouseenter') mouseenter(eventData : Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = 'transparent';
  }


  @HostListener('mouseleave') mouseleave(eventData : Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
  }

}
