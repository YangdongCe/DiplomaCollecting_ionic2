import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import{ForgetPage2} from'../Forget/forget2';
@Component({
  templateUrl: 'forget.html'
})
export class ForgetPage {
  code:string;
  constructor(public navCtrl: NavController , public alertCtrl:AlertController) {
  }
  Nextsign(){
    this.doPrompt();
  }
  doPrompt() { 
    let prompt = this.alertCtrl.create({
        message: "验证码已发送至邮箱", 
        inputs: [ {
           name: 'title',
            placeholder: '请输入验证码' ,
            
          }, 
          ],
          buttons: [
             { 
               text: '取消', 
               handler: data => {console.log('Cancel clicked'); 
              
            }
              },
               { 
                 text: '确定', 
                 handler: data => { this.navCtrl.push(ForgetPage2); }   
              }
            ] 
       });
      prompt.present();
   }
}
