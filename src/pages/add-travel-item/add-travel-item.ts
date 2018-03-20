import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TravelListService } from './../../services/travel-list/travel-list.service';
import { Item } from './../../models/item/item.module';
import { HomePage } from './../home/home';

/**
 * Generated class for the AddTravelItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-travel-item',
  templateUrl: 'add-travel-item.html',
})
export class AddTravelItemPage {
  item : Item = {
    name: '',
    place: '',
    date: '',
    tag: ''
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private travel: TravelListService,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTravelItemPage');
  }

  addTravelItem(item: Item) {
    this.travel.addTravelItem(item).then(ref => {
      this.navCtrl.setRoot(HomePage);
    });
  }

}
