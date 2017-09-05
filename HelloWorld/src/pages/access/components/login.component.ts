import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Events, NavController } from 'ionic-angular'
@Component({
    selector: 'page-access-componemt',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    public form: FormGroup;
    public username: AbstractControl;
    public password: AbstractControl;
    public submitted: boolean = false;
    constructor(fb: FormBuilder, public events: Events,public navCrl:NavController) {
        this.form = fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
        this.username = this.form.controls['username'];
        this.password = this.form.controls['password'];

        events.subscribe('heroN:created',(heroN,time)=>{
            console.log('Welcome',heroN,'at',time);
        });
    }

    ngOnInit() { }
    public onSubmit(value: Object): void {
        console.log(value);
    }
    returns(){
this.navCrl.pop();
    }
}