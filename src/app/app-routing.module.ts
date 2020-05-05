import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Notfound404Component } from './shared/components/notfound404/notfound404.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: '404', component: Notfound404Component },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'school', loadChildren: () => import('./school/school.module').then(m => m.SchoolModule) },
  { path: 'class', loadChildren: () => import('./class/class.module').then(m => m.ClassModule) },
  { path: 'sale', loadChildren: () => import('./sale/sale.module').then(m => m.SaleModule) },
  {path:'**', redirectTo:'/404',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
