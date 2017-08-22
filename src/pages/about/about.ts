import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {


  developers: Array<{ name: any, fb: any, twitter: any, instagram: any, course: any, contactno: any, image: any }>

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.developers = [
      {
        name: "Christian Angelo Umali",
        fb: "angelodgreat",
        twitter: "angelodgreat",
        instagram: "gelodgreat",
        course: "Bachelor of Science in Information Technology",
        contactno: "09177396352",
        image: "assets/img/developer_umali.webp"
      }
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
