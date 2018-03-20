import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TravelListService } from './../../services/travel-list/travel-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  travelList$: Observable<Item[]>
  constructor(public navCtrl: NavController, private travel: TravelListService) {}
}
