import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'page-home-hero',
    templateUrl: 'hero.component.html'
})

export class HeroComponent implements OnInit {
    @Input() hero:Hero;
    constructor() { }

    ngOnInit() { }
}