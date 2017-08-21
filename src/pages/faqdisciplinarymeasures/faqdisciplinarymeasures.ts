import { FaqdmotheroffensePage } from './../faqdmotheroffense/faqdmotheroffense';
import { FaqdmslightoffensePage } from './../faqdmslightoffense/faqdmslightoffense';
import { FaqdmlessseriousPage } from './../faqdmlessserious/faqdmlessserious';
import { FaqdmseriousPage } from './../faqdmserious/faqdmserious';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    this.navCtrl.push(FaqdmseriousPage);
  }
  goLessSeriousOffenses() {
    this.navCtrl.push(FaqdmlessseriousPage);
  }

  goOtherOffenses() {
    this.navCtrl.push(FaqdmotheroffensePage);
  }
  goSlightOffense() {
    this.navCtrl.push(FaqdmslightoffensePage);
  }

}
