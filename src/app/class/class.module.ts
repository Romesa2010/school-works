import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module';


@NgModule({
  declarations: [ClassComponent],
  imports: [
    CommonModule,
    ClassRoutingModule,
    AngularMaterialModule,
  ]
})
export class ClassModule { }
