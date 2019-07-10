import { Component, OnInit } from '@angular/core';
import { Model } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public model:Model){

  }

  title = 'resume-me';

  ngOnInit(): void {
    this.model.setProject()
    console.log(this.model.project)

   }
}
