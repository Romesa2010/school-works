import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module';


@NgModule({
  declarations: [SaleComponent],
  imports: [
    CommonModule,
    SaleRoutingModule,
    AngularMaterialModule,
  ]
})
export class SaleModule { }
