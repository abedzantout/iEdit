import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { AboutPage } from '../pages/about/about';
import { FeedbackPage } from '../pages/feedback/feedback';

@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;





  constructor(platform: Platform, public menu: MenuController) {

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Menu', component: MenuPage },
      { title: 'About us', component: AboutPage },
      { title: 'feedback', component: FeedbackPage }
    ];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage( page ) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
