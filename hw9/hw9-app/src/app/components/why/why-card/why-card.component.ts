import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../../models/card.model";

@Component({
  selector: 'app-why-card',
  templateUrl: './why-card.component.html',
  styleUrls: ['./why-card.component.scss']
})
export class WhyCardComponent implements OnInit {
  @Input() card: Card | any
  constructor() { }

  ngOnInit(): void {
  }

}
