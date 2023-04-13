import { Component, OnInit } from '@angular/core';
import {Card} from "../../models/card.model";
import {CardService} from "../../service/card.service";

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss']
})
export class WhyComponent implements OnInit {
  cards: Card[] = [];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }

}
