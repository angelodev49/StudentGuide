import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the VmbldginfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vmbldginfo',
  templateUrl: 'vmbldginfo.html',
})
export class VmbldginfoPage {

  data: SafeResourceUrl;
  loadedHTML: any;
  myLoadedHTML: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, sanitizer: DomSanitizer) {
    this.data = sanitizer.bypassSecurityTrustResourceUrl(this.myLoadedHTML = this.loadedHTML = navParams.get("loadedopenBldg"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VmbldginfoPage');
  }

}
