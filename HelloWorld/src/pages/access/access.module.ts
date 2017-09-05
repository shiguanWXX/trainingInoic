import { NgModule } from '@angular/core';
import { LoginComponent } from "./components/login.component";
import { IonicModule } from 'ionic-angular';
const _constpage = [LoginComponent]

@NgModule({
    imports: [IonicModule],
    exports: [],
    declarations: [..._constpage],
    entryComponents:[..._constpage],
    providers: [],
})
export class AccessModule { }
