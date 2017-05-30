import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { CommunitDetailPage } from '../communitydetail/communitydetail'
@Component({
  selector: 'page-community',
  templateUrl: 'community.html'
})
export class CommunitPage {
items:any;
myname:string;
  constructor(public navCtrl: NavController) {
      this.items=[
          {
              image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7KE3502ivxYEjP55Slw-p8OihTk82jE_8e-mq_oO1Ztl-8-tgQ',
              name: 'Fun',
              title:"Don't Know What To Do!",
              digest: "I've had a pretty messed up day. If we just...",
              time: "17/05/30 16:17:30.89",
          },
          {
              image:"http://uploadfile.huiyi8.com/2016/0107/20160107045329215.jpg",
              name: "Tome",
              title:"Look, kid...",
              digest: "I've got enough on my plate as it is, and I...",
              time: "17/05/30 16:17:30.89"
          },
          {
              image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQg1huTR638Xa8L0nXg_l_rIE4ojL9gXXqB2r97v6jjDt5Ewj",
              name: "Jamne",
              title:"I can handle myself",
              digest: "You will remove these restraints and leave...",
              time: "17/05/30 16:17:30.89"
          },
          {
              image:"http://img16.3lian.com/gif2016/gif16/q1/10/32.jpg",
              name: "Hamen",
              title:"Your thoughts betray you",
              digest: "I feel the good in you, the conflict...",
              time: "17/05/30 16:17:30.89"
          },

      ]
  }
  view(item){
      this.navCtrl.push(CommunitDetailPage,{
        item:item,
      });

  }
  
}
