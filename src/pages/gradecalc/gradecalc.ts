import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GradecalcPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gradecalc',
  templateUrl: 'gradecalc.html',
})
export class GradecalcPage {

  et_cp: any;
  et_exam: any;
  et_totalGrade: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradecalcPage');
  }


  calculateGrade() {

    let et_cp = this.et_cp ? parseFloat(this.et_cp) : 0;
    let et_exam = this.et_exam ? parseFloat(this.et_exam) : 0;
    var total = ((et_cp * 2) + et_exam) / 3;
    var rounded = Math.round(total * 100) / 100;
    this.et_totalGrade = rounded

  }

}
