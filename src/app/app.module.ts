import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { MePage } from '../pages/me/me';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginDetail } from '../pages/login/login_detail'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/Signin/Signin';
import { SigninPage2 } from '../pages/Signin/Signin2';
import { SelectedMePage }from '../pages/Selected/SelectedMe'; 
import { ForgetPage } from'../pages/Forget/Forget';
<<<<<<< HEAD
import { ForgetPage2 } from'../pages/Forget/forget2';
=======
import { MyDiploma } from '../pages/mydiploma/mydiploma';
import { SelectDimPage } from'../pages/SelectDim/SelectDim'
>>>>>>> origin/master
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MePage,
    HomePage,
    TabsPage,
    LoginPage,
    LoginDetail,
    SigninPage,
    SigninPage2,
    SelectedMePage,
    ForgetPage,
<<<<<<< HEAD
    ForgetPage2
=======
    MyDiploma,
    SelectDimPage,
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MePage,
    HomePage,
    TabsPage,
    LoginPage,
    LoginDetail,
    SigninPage,
    SigninPage2,
    SelectedMePage,
    ForgetPage,
<<<<<<< HEAD
    ForgetPage2
=======
    MyDiploma,
    SelectDimPage,
>>>>>>> origin/master
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
