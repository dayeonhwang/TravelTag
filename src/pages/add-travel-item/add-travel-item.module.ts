import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTravelItemPage } from './add-travel-item';

@NgModule({
  declarations: [
    AddTravelItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTravelItemPage),
  ],
})
export class AddTravelItemPageModule {}
