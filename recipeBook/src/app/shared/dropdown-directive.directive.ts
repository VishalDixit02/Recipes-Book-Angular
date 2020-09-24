import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  constructor() {
  }

}
