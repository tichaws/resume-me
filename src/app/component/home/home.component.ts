import { Component, OnInit } from '@angular/core';
import { SavefileService } from 'src/app/services/savefile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private save:SavefileService) { }
  typewriter_text: string = "LAPHAT-RADA WISADSRI";
  typewriter_display: string = "";

  ngOnInit() {
    this.typingCallback(this)
  }

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 100, that);
    } else {
      // that.typewriter_display = "";
    }
  }

  saveResume() {
    this.save.dowloadFile()
  }

}
