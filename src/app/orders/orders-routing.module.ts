import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';

const routes: Routes = [{ path: '', component: OrdersComponent }, 
{ path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
