import { Component, OnInit } from '@angular/core';
import { LoadingController, ActionSheetController, Platform } from "ionic-angular";

@Component({
    selector: 'page-home-test',
    templateUrl: 'test.page.html'
})

export class TestPageComponent implements OnInit {
    public event = {
        month: '1990-08-25',
        timeStarts: '07:50',
        timeEnds: '1998-02-25'
    }
    constructor(public loadingCtl: LoadingController,
        public actionsheetCtrl: ActionSheetController,
        public platform: Platform) { }

    ngOnInit() { }
    //加载样式
    loading() {
        this.loadingCtl.create({
            content: '请稍等...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    }
    //打开菜单
    openMenu() {
        let actionSheet = this.actionsheetCtrl.create({
            title: '专辑',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: '删除',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        console.log('Delete clicked')
                    }
                },
                {
                    text: '分享',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: '演示',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: '喜欢',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cansole clicked');
                    }
                }

            ]
        });
        actionSheet.present();
    }

}