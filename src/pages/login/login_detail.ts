import { Component} from '@angular/core';
import { NavController, LoadingController, AlertController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage'
@Component({
  selector: 'login-in',
  templateUrl: 'login_detail.html'
})

export class LoginDetail{
  myname: string;
  mypass: string;
  local: Storage;
  constructor(public LoadingCtrl: LoadingController,public NavCtrl:NavController,public aleCtrl: AlertController){
    this.myname='yangdongce';
    this.mypass='52987632';
  }
  loginfail(){
    let alert = this.aleCtrl.create({
      title: 'Login failed',
      message: 'please import again!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  loginDefault(){

      let loader = this.LoadingCtrl.create({
        content: 'Logging...',
        dismissOnPageChange: true,
        showBackdrop: false,
        duration: 3000
      });
      loader.present();
      setTimeout(() => {
        this.NavCtrl.push(TabsPage);
      }, 1000);
    }

  Login() {
    console.log(this.myname);
    if (this.myname=="yangdongce" && this.mypass=="52987632"){
      this.loginDefault();
    }
    else {
      this.loginfail();
    }
  }
}

