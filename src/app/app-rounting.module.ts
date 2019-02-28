import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OfficeComponent } from './components/office/office.component';


const routes: Routes =[
  {'path':'home', component: HomeComponent},
  {'path':'office', component:OfficeComponent}
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRountingModule { }
