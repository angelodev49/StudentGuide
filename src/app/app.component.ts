import { FaqPage } from './../pages/faq/faq';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { VicinitymapPage } from './../pages/vicinitymap/vicinitymap';
import { UnivcalendarPage } from './../pages/univcalendar/univcalendar';
import { OnlineportalPage } from './../pages/onlineportal/onlineportal';
import { GradecalcPage } from './../pages/gradecalc/gradecalc';
import { AboutPage } from './../pages/about/about';
import { CollegesPage } from './../pages/colleges/colleges';
import { MemoPage } from './../pages/memo/memo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = VicinitymapPage;

  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Vicinity Map', component: VicinitymapPage, icon: 'md-map' },
      { title: 'University Calendar', component: UnivcalendarPage, icon: 'md-calendar' },
      { title: 'CEU Online Portal', component: OnlineportalPage, icon: 'md-git-network' },
      { title: 'Schools/Colleges', component: CollegesPage, icon: 'md-school' },
      { title: 'Memo', component: MemoPage, icon: 'md-document' },
      { title: 'Grade Calculator', component: GradecalcPage, icon: 'md-calculator' },
      { title: 'FAQ', component: FaqPage, icon: 'md-information-circle' },
      { title: 'About', component: AboutPage, icon: 'md-people' }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
