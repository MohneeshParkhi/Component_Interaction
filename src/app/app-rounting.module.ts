import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OfficeComponent } from './components/office/office.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


const routes: Routes =[
  {'path':'home', component: HomeComponent},
  {'path':'office', component:OfficeComponent},
  {'path':'parent', component: ParentComponent},
  {'path':'child', component: ChildComponent}
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
