import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap';
import { Model } from 'src/app/model/model';
import { Project } from 'src/app/component/detail/detail';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.scss']
})
export class MoreDetailComponent implements OnInit {

  onReturnData: Subject<any>;
  project:Project = new Project()
  
  constructor(public _bsModalRef: BsModalRef,private model:Model) { }

  ngOnInit() {
    this.onReturnData = new Subject();
    console.log(this.project)
  }

  onCancel(): void {
    //this.onReturnData.next(null);
    this._bsModalRef.hide();
  }

  onGetDataSelect(): void {
    this._bsModalRef.hide();
  }

  onChangeIsCheck(){
    this._bsModalRef.hide();
  }
}
