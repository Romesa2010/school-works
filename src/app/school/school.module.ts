import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module';


@NgModule({
  declarations: [SchoolComponent],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    AngularMaterialModule
  ]
})
export class SchoolModule { }
