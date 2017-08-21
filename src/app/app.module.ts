import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { AboutPage } from './../pages/about/about';
import { VicinitymapPage } from './../pages/vicinitymap/vicinitymap';
import { UnivcalendarPage } from './../pages/univcalendar/univcalendar';
import { OnlineportalPage } from './../pages/onlineportal/onlineportal';
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
import { FaqceuhistoryPage } from './../pages/faqceuhistory/faqceuhistory';

//FAQ DisciplinaryMeasures
import { FaqdmslightoffensePage } from './../pages/faqdmslightoffense/faqdmslightoffense';
import { FaqdmseriousPage } from './../pages/faqdmserious/faqdmserious';
import { FaqdmotheroffensePage } from './../pages/faqdmotheroffense/faqdmotheroffense';
import { FaqdmlessseriousPage } from './../pages/faqdmlessserious/faqdmlessserious';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    VicinitymapPage,
    UnivcalendarPage,
    OnlineportalPage,
    GradecalcPage,
    FaqPage,
    CollegesPage,
    MemoPage,
    FaqboardofdirectorsPage,
    FaqothertransactionsPage,
    FaqenrollmentprocPage,
    FaqdisciplinarymeasuresPage,
    FaqceumusicPage,
    FaqceuhistoryPage,
    FaqdmslightoffensePage,
    FaqdmseriousPage,
    FaqdmotheroffensePage,
    FaqdmlessseriousPage
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
    OnlineportalPage,
    GradecalcPage,
    FaqPage,
    CollegesPage,
    MemoPage,
    FaqboardofdirectorsPage,
    FaqothertransactionsPage,
    FaqenrollmentprocPage,
    FaqdisciplinarymeasuresPage,
    FaqceumusicPage,
    FaqceuhistoryPage,
    FaqdmslightoffensePage,
    FaqdmseriousPage,
    FaqdmotheroffensePage,
    FaqdmlessseriousPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
