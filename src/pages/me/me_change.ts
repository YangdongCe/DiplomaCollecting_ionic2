import { Component } from '@angular/core';
import { NavController , AlertController } from 'ionic-angular';
import { Memima } from'../me/me_mima';
import { Mehelp } from'../me/me_help';
@Component({
  templateUrl: 'me_change.html'
})

export class Mechange{
  testRadioOpen :any;
   testRadioResult:any;
  constructor(public navCtrl: NavController ,public alertCtrl:AlertController){}
  doset(){
    this.navCtrl.push(Memima)
  }
  dohelp(){
    this.navCtrl.push(Mehelp)

  }
  doshare(){
    this. showRadio()
   }
   showRadio(){
       let alert = this.alertCtrl.create();
        alert.setTitle('选择'); 
        alert.addInput({ 
          type: 'radio', 
          label: '分享到QQ空间', 
          value: 'blue',
           checked: true
          });
           alert.addInput({ 
          type: 'radio', 
          label: '分享到微信朋友圈', 
          value: 'blue',
           checked: true
          });

           alert.addButton('取消'); 
           alert.addButton({ 
             text: '确定',
              handler: data => { this.testRadioOpen = false; this.testRadioResult = data;
               } 
              });
               alert.present(); 
              }


}

