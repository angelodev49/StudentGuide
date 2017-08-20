import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradecalcPage } from './gradecalc';

@NgModule({
  declarations: [
    GradecalcPage,
  ],
  imports: [
    IonicPageModule.forChild(GradecalcPage),
  ],
})
export class GradecalcPageModule {}
