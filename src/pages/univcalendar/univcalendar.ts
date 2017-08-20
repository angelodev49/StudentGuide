import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the UnivcalendarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-univcalendar',
  templateUrl: 'univcalendar.html',
})
export class UnivcalendarPage {

  constructor(public iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnivcalendarPage');
    // const browser = this.iab.create('https://ionicframework.com/');
  }

  


}
