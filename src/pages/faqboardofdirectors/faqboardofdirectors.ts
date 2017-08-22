import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VicinitymapPage } from '../vicinitymap/vicinitymap';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the FaqboardofdirectorsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faqboardofdirectors',
  templateUrl: 'faqboardofdirectors.html',
})
export class FaqboardofdirectorsPage {
  data: SafeResourceUrl;
  loadedHTML: any;
  myLoadedHTML: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, sanitizer: DomSanitizer) {
    this.ionViewDidLoad
    this.data = sanitizer.bypassSecurityTrustResourceUrl(this.myLoadedHTML = this.loadedHTML = navParams.get("myhtml"));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqboardofdirectorsPage');
  }

}
