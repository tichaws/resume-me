import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class SavefileService {
 

  constructor( private http: HttpClient,) { 
    
  }

  dowloadFile() {
    this.http
        .get<any>("/assets/pdf/LAPHAT-RADA's-Resume.pdf", { responseType: 'blob' as 'json' })
        .subscribe(data => {
          FileSaver.saveAs(data,'laphatrada-resume');
        });
  }

}
