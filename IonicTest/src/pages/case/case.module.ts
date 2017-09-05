import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { EbuttonsComponent } from './components/ebuttons/ebuttons';
import { ButtonMenuComponent } from './components/bmenu/button.menu';
import { BackgroundImageComponent } from './components/cards/background.images';
import { ButtonComponent } from './components/bcomponent/button.component';
import { CardsImageComponent } from './components/imcards/cards.image';
import { CardsSocialComponent } from './components/cards/social/cards.social';
import { CardsMapComponent } from './components/cards/map/cards.map';
import { BasicComponent } from './components/checkboxs/basic/basic';
import { SlidingComponent } from './components/lists/sliding/sliding';
import { MenusComponent } from './components/menus/menus';

const _constpage=[
    EbuttonsComponent,
    ButtonMenuComponent,
    BackgroundImageComponent,
    ButtonComponent,
    CardsImageComponent,
    CardsSocialComponent,
    CardsMapComponent,
    BasicComponent,
    SlidingComponent,
    MenusComponent
]
@NgModule({
    imports: [IonicModule],
    exports: [],
    declarations: [..._constpage],
    entryComponents:[..._constpage],
    providers: [],
})
export class CaseModule { }
