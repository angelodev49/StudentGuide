import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaqdisciplinaryholderPage } from './../faqdisciplinaryholder/faqdisciplinaryholder';
/**
 * Generated class for the FaqdisciplinarymeasuresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faqdisciplinarymeasures',
  templateUrl: 'faqdisciplinarymeasures.html',
})
export class FaqdisciplinarymeasuresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqdisciplinarymeasuresPage');
  }

  goSeriousOffenses() {
    this.navCtrl.push(FaqdisciplinaryholderPage, {
      myhtml: "assets/htmlcollections/serious_offenses.html"
    });

  }
  goLessSeriousOffenses() {
    this.navCtrl.push(FaqdisciplinaryholderPage, {
      myhtml: "assets/htmlcollections/less_serious_offenses.html"
    });
  }

  goOtherOffenses() {
    this.navCtrl.push(FaqdisciplinaryholderPage, {
      myhtml: "assets/htmlcollections/other_offenses_and_sanctions.html"
    });
  }
  goSlightOffense() {
    this.navCtrl.push(FaqdisciplinaryholderPage, {
      myhtml: "assets/htmlcollections/slight_offenses.html"
    });
  }

}
