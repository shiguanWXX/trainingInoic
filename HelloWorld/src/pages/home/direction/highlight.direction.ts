import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({ selector: '[myDirection]' })
export class HighLightDirective {
    @Input()
    highColor: string
    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = this.highColor;
    }
@HostListener('click')
onclick(){
    console.log('aa');
}
}