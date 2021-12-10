import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: 'appDropdown'
})
export class DropdownDirective{
  @HostBinding('class.open') isOpen = false;   // agguinge la class open se isOpen è false

  @HostListener('document.click', ['$event']) toggleOpen(event : Event){
    //this.isOpen = !this.isOpen;
    this.isOpen = this.elRef.nativeElement.contains(event.target);
  }

  constructor(private elRef : ElementRef){}


}
