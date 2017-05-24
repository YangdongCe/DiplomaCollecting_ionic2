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
   newfist:any;
  constructor(public navCtrl: NavController,private newlist: Newlistservices) {
}

  getItems() {
    this.navCtrl.push(Searchdiploma);
  }
  ngOnInit(){
    this.getPost();
    this.newfist={
      content:" <br>“一年之计在于春”，年头的时候大家都想为这一年做一些新的计划目标，例如考个资格证什么的！但是要注意哦！这几年来，有些资格证已经被国家取消了，所以当你想考某个资格证的时候，先看看这个资格证是否还考的必要！",
      title:"2017年最新最全！这些职业资格证已经被国务院取消啦！不要再考了！",
      source:"新闻网"
    }
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
  Newsclick(item){
    this.navCtrl.push(NewsPage,{
      item:item
    })
  }
}
