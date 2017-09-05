import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-case-component-checkbox-basic',
    templateUrl: 'basic.html'
})

export class BasicComponent implements OnInit {
    public tap:number=0;
    public press:number=0;
    constructor() { }

    ngOnInit() { }
    tapEvent(){
        this.tap++;
    }
    pressvent(){
        this.press++;
    }
}