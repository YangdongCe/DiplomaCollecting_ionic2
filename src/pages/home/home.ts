import { Component } from '@angular/core';
import { NavController ,ModalController, ViewController } from 'ionic-angular';
import { HomeservePage } from '../homeserve/homeserve';
import { Searchdiploma } from '../home/searchdiploma';
import { Newlistservices } from '../../services/newlistservices';
import { NewsPage } from '../newspage/newspage';
import { Plan } from '../plan/plan';
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
  constructor(public navCtrl: NavController,private newlist: Newlistservices,public modalCtrl: ModalController) {
 this.items=[
          {
              image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7KE3502ivxYEjP55Slw-p8OihTk82jE_8e-mq_oO1Ztl-8-tgQ',
             title:"新闻学专业需要考的证书 ",
             
              digest:"1.普通话水平测试等级证书：普通话水平测试等级证书是证明应试人普通话水平有效凭证，证书由国家语言文字工作委员会统一印制。教师和大学生为二级以上水平。考试内容：1.读单音节字词100个(排除轻声、儿化音节) 2.读双音节词语50个 3.朗读从《测试大纲》第五部分朗读材料(1-50号)中任选。 4.判断测试5.说话考试时间：全国普通话等级考试是一年两次，全国统一的，具体安排看当地政策。上半年是约3月报名，约5月考试。下半年是约9月报名，约12月考试。2.全国计算机一级证书：是经原国家教育委员会（现教育部）批准，由教育部考试中心主办，面向社会，用于考查应试人员计算机应用知识与技能的全国性计算机水平考试体系。考试科目：计算机基础及MSOffice应用、计算机基础及WPSOffice应用、计算机基础及Photoshop应用，一共三个科目。 考试时间：一般为3月倒数第一个周六和9月倒数第二个周六3.大学英语四级六证书：是由国家教育部高等教育司主持的全国性教学考试。考试的主要对象是根据教育大纲修完大学英语四级的在校大学本科生或研究生。 考试科目：写作、听力理解、阅读理解、翻译 考试时间：通常情况下为每年6月份、12月份的第三个星期六。4.新闻记者证：闻记者证是我国新闻机构的新闻采编人员从事新闻采访活动使用的有效工作身份证件，由新闻出版总署统一印制并核发，由新闻出版总署统一编号，并加盖新闻出版总署印章、新闻记者证核发专用章、新闻记者证年度审核专用章和本新闻机构钢印方为有效。其他任何单位或者个人不得制作、仿制新闻记者证，不得制作、发放专供采访使用的其它正式证件。考试时间：每年上半年举行一次。报名、考试的时间由广电总局确定，在受理报名前三个月向社会公告。考试科目： 综合知识、新闻基础知识和广播电视新闻业务",
             
          },
          {
              image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJurV6vBP7RWvTaecL-9ejl1Ssho-eAuoWQpIE-t9jqUnUdLVevAYhQ",
              title:"如何搞定英语四级段落翻译",
              digest: "四级翻译段落有140-160个汉字，六 级有180-200个汉字。翻译长度的增加无疑给广大考生增加了一定难度，但翻译考点与之前的考点基本是一致的，所以广大考生可以稍安勿躁。考生如何在强化阶段复习翻译，又如何在考 试中夺取高分呢？词汇和长难句是攻克翻译这座大山的不二法宝。关注特殊词汇，学习日常生活词语段落翻译的重点然是词汇，特别是较为特殊的翻译类词汇，通过样卷分析，建议考生多关注一下和中国节日、历史事件、经济文化、旅游活动、社会发展等相关的词汇。写长难句可增加得分点段落翻译的另一难点就是长难句的攻克，平时加大对长难句的分析，考 试中才能写出精彩得分的句型。分析从句比较多的长难句，要找到句子的切分点，切分点主要有两种，一个是直接看到的，即连接词that、which、who、when等等；另外一个是潜在的，即各种动词形式，包括doing、todo(单独使用的)、done等等。这方面的技巧建议报班学习一下，可以去北京新 东 方的四级强化班，学习一下应试技巧跟方法。最后，注意做翻译一定要坚持两点，即打草稿和“写”。在头脑中形成的翻译不是翻译，落到纸上，仍然不一定是通顺的句子，所以，每次在做翻译时，一定要坚持把语言写出来，这样才能提高语言组织能力。同时，长难句的翻译不是一气呵成的，要练习如何打草稿，保证不会因直接誊写出现涂改问题，通过平时的草稿练习，也锻炼下打草稿的清晰程度，避免在誊写时丢掉一些东西。"

          },
          {
              image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQg1huTR638Xa8L0nXg_l_rIE4ojL9gXXqB2r97v6jjDt5Ewj",
            
              title:"[资料]2017年一级建造师 ",
              digest: "公共课考试形势：            (1)概述题比重提升。2016年的选择题中概述题占了很大的比重，什么是概述题?例如“关于某个知识点，描述正确的是(或者描述错误的是)……”，以法规为例：100道选择题中只概述题就有70道，而30道多选题中概述题竟达到了25道;2015年法规100道选择题中概述题只有30题。由此可见概述题将是今后一建考试的一大重点题型，概述题主要考核的是考生有没有对知识点进行了正确的理解和记忆，这考验的是考生平时的积累。(2)选择题干扰项深刻灵活，更加强调平时的积累和理解。考生之所以感觉2016年一建考试中的选择题难，主要是因为选项中多使用书中原话，只是把其中的一个词或两个词修改成类似的词，用以干扰考生，所以考生看到哪个选项都感觉是对的，如果对书中原话知识点记忆不清或理解不到位，则无法辨别出正确选项。",
             
          },

      ]


}

  getItems() {
    this.navCtrl.push(Searchdiploma);
  }
 /* ngOnInit(){
    this.getPost();
    
  }
  getPost(){
    this.newlist.getPost().subscribe(reponse => {
      this.items = reponse.data;  
      console.log(reponse);
    });
  }*/

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
  In(){
     let modal = this.modalCtrl.create(Plan);
    modal.present();
  }

}
