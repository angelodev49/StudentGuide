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

  et_gwa_units: any;
  et_gwa_grade: any;

  numxunits: any = 0;
  numxgrade: any = 0;
  clickcounter: any = 0;

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

  // Fix the computation of GWA
  calculateGwa() {
    let clickcounter;
    clickcounter += 1;

    let et_gwa_grade = this.et_gwa_grade ? parseFloat(this.et_gwa_grade) : 0;
    let et_gwa_units = this.et_gwa_units ? parseFloat(this.et_gwa_units) : 0;
    let numxunits = 0;
    let numxgrade = 0;
    var xunits = et_gwa_units + numxunits;

    var multixGrade = et_gwa_grade * et_gwa_units;
    var xGrades = multixGrade + numxgrade;
    var gwaResult = Math.round(xGrades * 100) / 100;

  }

}
