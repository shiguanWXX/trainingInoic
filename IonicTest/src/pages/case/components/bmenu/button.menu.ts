import { SlidingComponent } from './../lists/sliding/sliding';
import { BasicComponent } from './../checkboxs/basic/basic';
import { CardsMapComponent } from './../cards/map/cards.map';
import { CardsSocialComponent } from './../cards/social/cards.social';
import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { EbuttonsComponent } from '../ebuttons/ebuttons';
import { BackgroundImageComponent } from '../cards/background.images';
import { ButtonComponent } from '../bcomponent/button.component';
import { CardsImageComponent } from '../imcards/cards.image';
import { MenusComponent } from '../menus/menus';

@Component({
    selector: 'page-case-component-bmenu',
    templateUrl: 'button.menu.html'
})

export class ButtonMenuComponent implements OnInit {
    items = [];
    page1 = EbuttonsComponent;
    page2 = BackgroundImageComponent;
    page3 = ButtonComponent;
    page4=CardsImageComponent;
    page5=CardsSocialComponent;
    constructor(public navCtrl: NavController) {
        this.items = [
            {
                'title': 'AlertButton',
                'icon': 'leaf',
                'components': this.page1,
                'color': '#E63135'
            }, {
                'title': 'BackgroundImages',
                'icon': 'leaf',
                'components': this.page2,
                'color': 'green'
            },
            {
                'title': 'ButtonComponent',
                'icon': 'leaf',
                'components': this.page3,
                'color': 'blue'
            },{
                'title':"ImageCards",
                'icon':'leaf',
                'components':this.page4,
                'color':'yellow'
            },{
                'title':"CardsSocial",
                'icon':'leaf',
                'components':CardsSocialComponent,
                'color':'pink'
            },{
                'title':"CardsMap",
                'icon':'leaf',
                'components':CardsMapComponent,
                'color':'plum'
            },{
                'title':"CheckboxBasic",
                'icon':"leaf",
                'components':BasicComponent,
                'color':"pure",
            },{
                'title':"ListsSilding",
                'icon':"leaf",
                'components':SlidingComponent,
                'color':"warm"
            },{
                'title':"Menus",
                'icon':"leaf",
                'components':MenusComponent,
                'color':"cherry"
            }
            
        ]
    }

    ngOnInit() { }
    openButton(item) {
        this.navCtrl.push(item.components, { item: item })
    }
}