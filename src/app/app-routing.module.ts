import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarSalesComponent } from './components/car-sales/car-sales.component';
import { CarStockComponent } from './components/car-stock/car-stock.component';
import { PlateChangerComponent } from './components/plate-changer/plate-changer.component';

const routes: Routes = [
  {
    path:"",
    component: CarStockComponent
  },
  {
    path:'sales',
    component: CarSalesComponent
  },
  {
    path:'plates',
    component: PlateChangerComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
