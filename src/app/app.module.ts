//Providers
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//Pages
import { MyApp } from './app.component';
import { AboutPage } from './../pages/about/about';
import { VicinitymapPage } from './../pages/vicinitymap/vicinitymap';
import { UnivcalendarPage } from './../pages/univcalendar/univcalendar';
import { GradecalcPage } from './../pages/gradecalc/gradecalc';
import { FaqPage } from './../pages/faq/faq';
import { CollegesPage } from './../pages/colleges/colleges';
import { MemoPage } from './../pages/memo/memo';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//FAQ
import { FaqboardofdirectorsPage } from './../pages/faqboardofdirectors/faqboardofdirectors';
import { FaqothertransactionsPage } from './../pages/faqothertransactions/faqothertransactions';
import { FaqenrollmentprocPage } from './../pages/faqenrollmentproc/faqenrollmentproc';
import { FaqdisciplinarymeasuresPage } from './../pages/faqdisciplinarymeasures/faqdisciplinarymeasures';
import { FaqceumusicPage } from './../pages/faqceumusic/faqceumusic';
//FAQ DisciplinaryMeasures
import { FaqdisciplinaryholderPage } from './../pages/faqdisciplinaryholder/faqdisciplinaryholder'
//VicinityMap
import { VmlistbldgsPage } from './../pages/vmlistbldgs/vmlistbldgs';
import { VmbldginfoPage } from './../pages/vmbldginfo/vmbldginfo';
//OnlinePortalPage
import { OnlineportalpagesPage } from './../pages/onlineportalpages/onlineportalpages';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    VicinitymapPage,
    UnivcalendarPage,
    GradecalcPage,
    FaqPage,
    CollegesPage,
    MemoPage,
    FaqboardofdirectorsPage,
    FaqothertransactionsPage,
    FaqenrollmentprocPage,
    FaqdisciplinarymeasuresPage,
    FaqdisciplinaryholderPage,
    FaqceumusicPage,
    VmlistbldgsPage,
    VmbldginfoPage,
    OnlineportalpagesPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    VicinitymapPage,
    UnivcalendarPage,
    GradecalcPage,
    FaqPage,
    CollegesPage,
    MemoPage,
    FaqboardofdirectorsPage,
    FaqothertransactionsPage,
    FaqenrollmentprocPage,
    FaqdisciplinarymeasuresPage,
    FaqdisciplinaryholderPage,
    FaqceumusicPage,
    VmlistbldgsPage,
    VmbldginfoPage,
    OnlineportalpagesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
