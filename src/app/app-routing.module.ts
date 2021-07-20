import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './component/detail/detail.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  // { path: 'detail', component: DetailComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
