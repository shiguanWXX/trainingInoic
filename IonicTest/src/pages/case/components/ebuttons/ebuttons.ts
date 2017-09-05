import { Component, OnInit } from '@angular/core';
import { AlertController } from "ionic-angular";

@Component({
    selector: 'page-case-component-ebuttons',
    templateUrl: 'ebuttons.html'
})

export class EbuttonsComponent implements OnInit {
    testRadioOpen: boolean;
    testRadioResult;
    testCheckboxOpen: boolean;
    testCheckboxResult;
    constructor(public alertCtrl: AlertController) { }

    ngOnInit() { }
    doAlert() {
        let alert = this.alertCtrl.create({
            title: 'New Friend',
            message: 'Your friend ,Obi wwan Kenobi ,just approved your friend request',
            buttons: ['Ok']
        });
        alert.present()
    }
    doConfirm() {
        let confirms = this.alertCtrl.create({
            title: '使用这个光剑？',
            message: '你是否同意使用这个光剑在星际星系之间做得很好？',
            buttons: [
                {
                    text: '不同意',
                    handler: () => {
                        console.log('不同意的点击')
                    }
                }, {
                    text: '同意',
                    handler: () => {
                        console.log('同意的点击')
                    }
                }
            ]
        });
        confirms.present();
    }
    doPrompt() {
        let prompt = this.alertCtrl.create({
            title: '登录',
            message: '输入一个你热衷的专辑名去添加',
            inputs: [{
                name: 'title',
                placeholder: '标题'
            }],
            buttons: [{
                text: '取消',
                handler: data => {
                    console.log('取消的点击');
                }
            },
            {
                text: '保存',
                handler: data => {
                    console.log('保存的点击');
                }
            }
            ]
        });
        prompt.present();
    }
    doRadio() {
        let alertRadio = this.alertCtrl.create();
        alertRadio.setTitle('光剑颜色');
        alertRadio.addInput({
            type: 'radio',
            label: '蓝色',
            value: 'blue',
            checked: true
        });
        alertRadio.addInput({
            type: 'radio',
            label: '绿色',
            value: 'green',
        });
        alertRadio.addInput({
            type: 'radio',
            label: '红色',
            value: 'red',
        });
        alertRadio.addInput({
            type: 'radio',
            label: '黄色',
            value: 'yellow',
        });
        alertRadio.addInput({
            type: 'radio',
            label: '紫色',
            value: 'purple',
        });
        alertRadio.addInput({
            type: 'radio',
            label: '黑色',
            value: 'white',
        });
        alertRadio.addInput({
            type: 'radio',
            label: '白色',
            value: 'block',
        });
        alertRadio.addButton('取消');
        alertRadio.addButton({
            text: '确定',
            handler: data => {
                console.log('Radio data', data);
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });
        alertRadio.present()
        //不明确作用
        // .then(()=>{
        //     this.testRadioOpen=true;
        // });
    }
    doCheckbox() {
        let alertCheckbox = this.alertCtrl.create();
        alertCheckbox.setTitle('你访问过哪些行星');
        alertCheckbox.addInput({
            type: 'checkbox',
            label: '奥德兰',
            value: 'value1',
            checked: true
        });
        alertCheckbox.addInput({
            type: 'checkbox',
            label: '贝思平',
            value: 'value2'
        });
        alertCheckbox.addInput({
            type: 'checkbox',
            label: '晶',
            value: 'value3'
        });
        alertCheckbox.addInput({
            type: 'checkbox',
            label: '恩多',
            value: 'value4'
        });
        alertCheckbox.addInput({
            type: 'checkbox',
            label: '霍斯',
            value: 'value5'
        });
        alertCheckbox.addInput({
            type: 'checkbox',
            label: '纳布',
            value: 'value6'
        });
        alertCheckbox.addInput({
            type: 'checkbox',
            label: '塔图',
            value: 'value7'
        });
        alertCheckbox.addButton('取消');
        alertCheckbox.addButton({
            text: '确定',
            handler: data => {
                console.log('Checkbox data:', data);
                this.testCheckboxOpen = false;
                this.testCheckboxResult = data;
            }
        });
        alertCheckbox.present().then(()=>{
            this.testCheckboxResult=true;
        })
    }
}