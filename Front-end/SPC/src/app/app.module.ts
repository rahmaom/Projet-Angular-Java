import { TokenIterceptorService } from './services/token-iterceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon'

import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DefaultModule } from './layouts/default/default.module';
import { ListAtheletesComponent } from './components/athletes/list-atheletes/list-atheletes.component';
import { AddAthelethesComponent } from './components/athletes/add-athelethes/add-athelethes.component';
import { ShowAthelethesComponent } from './components/athletes/show-athelethes/show-athelethes.component';
import { LoginComponent } from './auth/login/login.component';
import { SportsComponent } from './components/sports/sports.component';
import { AddSportComponent } from './components/sports/add-sport/add-sport.component';
import { ListSportsComponent } from './components/sports/list-sports/list-sports.component';
import { ModalComponent } from './modal/modal/modal.component';
import { ModalModule } from './modal/modal/modal.module';


@NgModule({
  declarations: [
    AppComponent,
    // DefaultComponent,
    DashboardComponent,
    ChartsComponent,
    ListAtheletesComponent,
    AddAthelethesComponent,
    ShowAthelethesComponent,
    LoginComponent,
    SportsComponent,
    AddSportComponent,
    ListSportsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    // DefaultModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    DefaultModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule,
  ],
  exports:[
    DefaultModule,
    ModalModule,

  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenIterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
