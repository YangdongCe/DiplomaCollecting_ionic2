import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeservePage } from '../homeserve/homeserve';
import { Newlistservices } from '../../services/newlistservices'
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
   
  constructor(public navCtrl: NavController,private newlist: Newlistservices) {

  }
  ngOnInit(){
    this.getPost();
  }
  getPost(){
    this.newlist.getPost().subscribe(reponse => {
      this.items = reponse.data;  
      console.log(reponse);
    });
  }
  view(item){
    console.log(item.title);
  }

}
