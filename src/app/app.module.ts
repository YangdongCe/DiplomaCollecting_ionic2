import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule,DomSanitizer } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MePage } from '../pages/me/me';
import { HomePage } from '../pages/home/home';
import { Searchdiploma } from '../pages/home/searchdiploma';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginDetail } from '../pages/login/login_detail'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/Signin/Signin';
import { SigninPage2 } from '../pages/Signin/Signin2';
import { SelectedMePage }from '../pages/Selected/SelectedMe'; 
import { ForgetPage } from'../pages/Forget/Forget';
import { ForgetPage2 } from'../pages/Forget/forget2';
import { MyDiploma } from '../pages/mydiploma/mydiploma';
import { SelectDimPage } from'../pages/SelectDim/SelectDim';
import { Mechange } from'../pages/me/me_change';
import { Memima } from'../pages/me/me_mima';
import { Mehelp} from'../pages/me/me_help';
import { SearchsPage } from '../pages/searchs/search';
import { DipDetailPage } from '../pages/diploma_detail/diploma_detail'
import { NewsPage } from '../pages/newspage/newspage'
@NgModule({
  declarations: [
    MyApp,
    MePage,
    HomePage,
    TabsPage,
    LoginPage,
    LoginDetail,
    SigninPage,
    SigninPage2,
    SelectedMePage,
    ForgetPage,
    ForgetPage2,
    MyDiploma,
    SelectDimPage,
    Mechange,
    Memima,
    Mehelp,
    Searchdiploma,
    SearchsPage,
    DipDetailPage,
    NewsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MePage,
    HomePage,
    TabsPage,
    LoginPage,
    LoginDetail,
    SigninPage,
    SigninPage2,
    SelectedMePage,
    ForgetPage,
    ForgetPage2,
    MyDiploma,
    SelectDimPage,
    Mechange,
    Memima,
    Mehelp,
    Searchdiploma,
    SearchsPage,
    DipDetailPage,
    NewsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
