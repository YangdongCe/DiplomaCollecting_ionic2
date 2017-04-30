import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SelectDimPage } from '../SelectDim/SelectDim'
@Component({
  templateUrl: 'Signin2.html'
})
export class SigninPage2 {
  items;
  zhuanye: string;
  shi: string;
  sheng: string;
  xuexiao: string;
  datas;
  loading: any;
  constructor(public navCtrl: NavController, public params: NavParams, public loadingCtrl: LoadingController ) {
    this.datas = params.get('datas');
    console.log(this.datas);
  }
  init(){
      this.items=[
          '软件工程',
          '物流管理',
          '生物科学',
          '计算机科学',
          '英语',
          '日语'
      ];
  }
  Loading(){
     this.loading = this.loadingCtrl.create({
        content: 'Login...',
        dismissOnPageChange: true,
    });
    this.loading.present();
    
  }
  get(ev){
      this.init();
      var val = ev.target.value;
       if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  Nextsign(){
      this.Loading();
      this.navCtrl.push(SelectDimPage);
  }
}
