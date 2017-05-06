import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeservePage } from '../homeserve/homeserve';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   items = [];
   topic:string;
   description:string;
   content:string;
   photo:URL;

  constructor(public navCtrl: NavController) {

}
}
