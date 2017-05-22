import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeservePage } from '../homeserve/homeserve';
import { Searchdiploma } from '../home/searchdiploma';
import { Newlistservices } from '../../services/newlistservices'
import { NewsPage } from '../newspage/newspage'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   searchQuery: string = '';
   zhengshu:string;
   items = [];
   topic:string;
   description:string;
   content:string;
   photo:URL;
   
  constructor(public navCtrl: NavController,private newlist: Newlistservices) {
}

  getItems() {
    this.navCtrl.push(Searchdiploma);
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
    this.navCtrl.push(NewsPage,{
      item:item
    });
  }

}
