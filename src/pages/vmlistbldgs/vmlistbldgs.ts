import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VmbldginfoPage } from './../vmbldginfo/vmbldginfo';
/**
 * Generated class for the VmlistbldgsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vmlistbldgs',
  templateUrl: 'vmlistbldgs.html',
})
export class VmlistbldgsPage {

  bldglist: Array<{ image: any, title: string, description: any, info: any }>;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.bldglist = [
      { image: 'assets/img/scroll_cah.webp', title: 'CAH', description: 'CAH', info: 'assets/htmlcollections/bldginfos/CAH_Info.html' },
      { image: 'assets/img/scroll_cdl.webp', title: 'CDL', description: 'CDL', info: 'assets/htmlcollections/bldginfos/CDLH_Info.html' },
      { image: 'assets/img/scroll_dentistry_science.webp', title: 'Dent Sci', description: 'Dent Sci', info: 'assets/htmlcollections/bldginfos/Dent-Sci_Info.html' },
      { image: 'assets/img/scroll_chapel.webp', title: 'Chapel', description: 'Chapel', info: 'assets/htmlcollections/bldginfos/Chapel_Info.html' },
      { image: 'assets/img/scroll_dcth.webp', title: 'DCTH', description: 'DCTH', info: 'assets/htmlcollections/bldginfos/DCTH_Info.html' },
      { image: 'assets/img/scroll_ffh.webp', title: 'FFH', description: 'FFH', info: 'assets/htmlcollections/bldginfos/FFH_Info.html' },
      { image: 'assets/img/scroll_fgh.webp', title: 'FGH', description: 'FGH', info: 'assets/htmlcollections/bldginfos/FGH_DentBuild_Info.html' },
      { image: 'assets/img/scroll_fsh.webp', title: 'FSH', description: 'FSH', info: 'assets/htmlcollections/bldginfos/FSH_Info.html' },
      { image: 'assets/img/scroll_gdlsc.webp', title: 'GDLSC', description: 'GDLSC', info: 'assets/htmlcollections/bldginfos/GDLSC_Info.html' },
      { image: 'assets/img/scroll_isc.webp', title: 'ISC', description: 'ISC', info: 'assets/htmlcollections/bldginfos/ISC_Info.html' },
      { image: 'assets/img/scroll_lah.webp', title: 'LAH', description: 'LAH', info: 'assets/htmlcollections/bldginfos/LAH_Info.html' },
      { image: 'assets/img/scroll_mvh.webp', title: 'MVH', description: 'MVH', info: 'assets/htmlcollections/bldginfos/MVH_Info.html' },
      { image: 'assets/img/scroll_northquad.webp', title: 'North Quadrangle', description: 'North Quadrangle', info: 'assets/htmlcollections/bldginfos/NorthQuadrangle_Info.html' },
      { image: 'assets/img/scroll_phlh.webp', title: 'PHLH', description: 'PHLH', info: 'assets/htmlcollections/bldginfos/PHLH_Info.html' },
      { image: 'assets/img/scroll_sac.webp', title: 'SAC', description: 'SAC', info: 'assets/htmlcollections/bldginfos/SAC_Info.html' },
      { image: 'assets/img/scroll_sdv.webp', title: 'SDVH', description: 'SDVH', info: 'assets/htmlcollections/bldginfos/SDVH_Info.html' },
      { image: 'assets/img/scroll_tc.webp', title: 'TC', description: 'TC', info: 'assets/htmlcollections/bldginfos/TC_Info.html' },
    ]

  }

  openBuildingInfo(bldginfo) {
    this.navCtrl.push(VmbldginfoPage, {
      loadedopenBldg: bldginfo
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VmlistbldgsPage');
  }

}
