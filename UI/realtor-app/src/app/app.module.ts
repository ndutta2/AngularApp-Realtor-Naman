import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
//for routing

import {Routes, RouterModule} from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
//add form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user/user-register/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
//for ngx bootstrap for dropdown
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//for tabs from ngx boostastrap
import { TabsModule } from 'ngx-bootstrap/tabs';
//for buttons from ngx bootstrap
import { ButtonsModule } from 'ngx-bootstrap/buttons';
//for datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const appRoutes: Routes = [ 
  {path: 'add-property' , component: AddPropertyComponent},
  {path: '' , component: PropertyListComponent},
  {path: 'rent-property' , component: PropertyListComponent},
  {path: 'property-detail/:id' , component: PropertyDetailComponent},
  
  {path: 'user-login' , component: UserLoginComponent},
  {path: 'user-register' , component: UserRegisterComponent}
]


@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
    PropertyDetailComponent,
    UserRegisterComponent,
    UserLoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //add
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
