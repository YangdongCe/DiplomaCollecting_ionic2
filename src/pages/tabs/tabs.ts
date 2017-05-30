import { Component } from '@angular/core';

import { MyDiploma } from '../mydiploma/mydiploma';
import { MePage } from '../me/me';
import { HomePage } from '../home/home';
import { CommunitPage } from '../community/community'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyDiploma;
  tab3Root = MePage;
  tab4Root = CommunitPage;
  constructor() {

  }
}
