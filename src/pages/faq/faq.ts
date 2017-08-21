import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FaqothertransactionsPage } from './../faqothertransactions/faqothertransactions';
import { FaqenrollmentprocPage } from './../faqenrollmentproc/faqenrollmentproc';
import { FaqdisciplinarymeasuresPage } from './../faqdisciplinarymeasures/faqdisciplinarymeasures';
import { FaqceumusicPage } from './../faqceumusic/faqceumusic';
import { FaqceuhistoryPage } from './../faqceuhistory/faqceuhistory';
import { FaqboardofdirectorsPage } from './../faqboardofdirectors/faqboardofdirectors';

/**
 * Generated class for the FaqPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

  goCeuBoardMembers() {
    this.navCtrl.push(FaqboardofdirectorsPage);
  }
  goOtherTransaction() {
    this.navCtrl.push(FaqothertransactionsPage);
  }
  goCeuHistory() {
    this.navCtrl.push(FaqceuhistoryPage);
  }
  goDisciplinaryMeasures() {
    this.navCtrl.push(FaqdisciplinarymeasuresPage);
  }
  goEnrollmentProcedures() {
    this.navCtrl.push(FaqenrollmentprocPage);
  }
  goCeuMusic() {

  }
}
