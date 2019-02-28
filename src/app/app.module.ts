import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OfficeComponent } from './components/office/office.component';
import { AppRountingModule } from './app-rounting.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
