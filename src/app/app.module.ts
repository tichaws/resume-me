import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DetailComponent } from './component/detail/detail.component';
import { AngularFireModule } from 'angularfire2'
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { SavefileService } from './services/savefile.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiPrefix } from './http/api-prefix.intorceptor';
import { MoreDetailComponent } from './modal/more-detail/more-detail.component';
import { ModalModule } from 'ngx-bootstrap';
import { Model } from './model/model';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';

export const config ={
  apiKey: "AIzaSyB6dMRmzlgbEUJtaALlrRtkBxouSQ3Dx7k",
  authDomain: "portfolio-6987d.firebaseapp.com",
  databaseURL: "https://portfolio-6987d.firebaseio.com",
  projectId: "portfolio-6987d",
  storageBucket: "portfolio-6987d.appspot.com",
  messagingSenderId: "487737197889"
}

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MoreDetailComponent,
    HomeComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [SavefileService,AngularFireDatabase,{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiPrefix,
    multi: true,
  },Model],
  entryComponents:[MoreDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
