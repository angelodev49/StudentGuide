import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the FaqdisciplinaryholderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faqdisciplinaryholder',
  templateUrl: 'faqdisciplinaryholder.html',
})
export class FaqdisciplinaryholderPage {
  data: SafeResourceUrl;
  loadedHTML: any;
  myLoadedHTML: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, sanitizer: DomSanitizer) {
    this.data = sanitizer.bypassSecurityTrustResourceUrl(this.myLoadedHTML = this.loadedHTML = navParams.get("myhtml"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqdisciplinaryholderPage');
  }

}
