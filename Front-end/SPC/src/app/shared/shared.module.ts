import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


// import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    HeaderComponent,
    // FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,  
  // MatAutocompleteModule,
    // MatFormFieldModule
    // MDBBootstrapModule.forRoot(),


  ],
  exports: [
    HeaderComponent,
    // FooterComponent,
    SidebarComponent, 

   ]
})
export class SharedModule { }

