import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from './../../models/item/item.module';

@Injectable()
export class TravelListService {
  private travelListRef = this.db.list<Item>('travel-list');
  constructor(private db : AngularFireDatabase) {}
  getTravelList() {
    return this.travelListRef;
  }
  addTravelItem(item:Item) {
    return this.travelListRef.push(item);
  }
};
