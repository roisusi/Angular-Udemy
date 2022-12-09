import {
  Directive,
  OnInit,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appEvenBetterHighlight]',
})
export class EvenBetterHighlightDirective implements OnInit {
  @Input() default: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor')
  backgroundColor: string;
  constructor() {}
  ngOnInit() {
    this.backgroundColor = this.default;
  }
  //Events from the Dom
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.default;
  }
}
