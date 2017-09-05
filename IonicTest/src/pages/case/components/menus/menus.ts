import { Component, OnInit } from '@angular/core';
import { App, MenuController } from "ionic-angular";

@Component({
    selector: 'page-case-component-menu',
    templateUrl: 'menus.html'
})

export class MenusComponent implements OnInit {
    constructor(app:App,menuCtrl:MenuController) { 
        menuCtrl.enable(true);
    }

    ngOnInit() { }
}