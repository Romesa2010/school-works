import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Notfound404Component } from './shared/components/notfound404/notfound404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormWrapperComponent } from './shared/components/form-wrapper/form-wrapper.component'
//https://www.freelancermap.com/blog/using-forroot-and-forchild-to-configure-modules-in-angular/
@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component,
    FormWrapperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
