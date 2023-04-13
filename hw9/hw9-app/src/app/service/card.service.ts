import { Injectable } from '@angular/core';
import {Card} from "../models/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: Card[] = [
    new Card(
      'assets/icons/cards-icons/circles.svg',
      'Environmental Law',
      'Environmental legal issues might occur since the planned business activities are designed'
    ),
    new Card(
      'assets/icons/cards-icons/bag.svg',
      'Corporate and Commercial',
      'We provide a complete range of services for the continuity of your business activities.'
    ),
    new Card(
      'assets/icons/cards-icons/rocket.svg',
      'Information and Technology',
      'IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.'
    ),
    new Card(
      'assets/icons/cards-icons/users.svg',
      'Other Services',
      'In dealing with disruptive economic and legal challenge, our firm also provide various legal services.'
    ),
  ];
  constructor() { }

  getCards() {
    return this.cards.slice();
  }
}
