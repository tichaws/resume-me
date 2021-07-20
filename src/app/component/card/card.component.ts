import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/model/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public models:Model) { }

  ngOnInit() {

  }

}
