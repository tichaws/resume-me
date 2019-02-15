import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, } from 'angularfire2/database';
import { SavefileService } from 'src/app/services/savefile.service';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  items:any;
  sentSuccess = false
  sentfail = false

  constructor(private db: AngularFireDatabase, private save: SavefileService) {
  }

  contactForm = {
    email: '',
    name: '',
    text: ''
  }

  ngOnInit() {
   
  }

  checkPatternEmail(txtEmail) {
    if (txtEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
      return true;
    } else {
      return false;
    }
  }
  clearValue() {
    this.contactForm.email = ''
    this.contactForm.name = ''
    this.contactForm.text = ''
  }
  contact() {
    if (this.contactForm.email == '' || this.contactForm.name == '' || this.contactForm.text == '') {
      this.sentfail = true
      setTimeout(() => {
        this.sentfail = false;
      }, 2000);
    } else if (this.checkPatternEmail(this.contactForm.email)) {
      this.db.list("/contact").push(this.contactForm);
      this.sentSuccess = true
      this.clearValue()
      setTimeout(() => {
        this.sentSuccess = false;
      }, 2000);
    }
    else {
      this.sentfail = true
      setTimeout(() => {
        this.sentfail = false;
      }, 2000);
    }
  }

  saveResume() {
    this.save.dowloadFile()
  }
}
