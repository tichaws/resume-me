import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/model/model';
import { Project } from '../detail/detail';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public models:Model) { }
  public projects:Array<Project> = this.models.project
  ngOnInit() {

  }

  btnShuffle(){
    /* use Math.random() to get a number between 0 and 1 then reduce .5 
    to set the lower and upper bounds */
    this.projects.sort(()=> Math.random() - 0.5)
    /*  If the result of this operation is < 0, the element a is put to an index lower than b,
    and the opposite if the result is > 0.  */
  }
}
