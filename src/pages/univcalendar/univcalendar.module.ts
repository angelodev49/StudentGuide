import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnivcalendarPage } from './univcalendar';

@NgModule({
  declarations: [
    UnivcalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(UnivcalendarPage),
  ],
})
export class UnivcalendarPageModule {}
