import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchsPage } from '../searchs/search'
@Component({
    selector: 'page-searchdiploma',
  templateUrl: 'searchdiploma.html'
})
export class Searchdiploma {

  constructor(public navCtrl: NavController) {

  }

  Searchzhiye(){
      this.navCtrl.push(SearchsPage);
  }
  Searchzhuanye(){
      this.navCtrl.push(SearchsPage);
  }
  Searchzhengshu(){
      this.navCtrl.push(SearchsPage);
  }
}
