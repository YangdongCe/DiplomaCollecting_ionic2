import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Newlistservices } from '../services/newlistservices';
import { LoginPage } from '../pages/login/login';
import { GetDipservices } from '../services/getallDipservices';
import { GetDipdetailservices } from '../services/getdipdetailservices'
@Component({
  templateUrl: 'app.html',
  providers: [ Newlistservices, GetDipservices, GetDipdetailservices ]
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
