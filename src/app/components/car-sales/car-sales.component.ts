import { VehicleExchange } from './../model/VehicleExchange';
import { GscService } from './../../services/gsc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-sales',
  templateUrl: './car-sales.component.html',
  styleUrls: ['./car-sales.component.scss']
})
export class CarSalesComponent implements OnInit {
  carStock = [];
  plate;
  ssn;
  price;
  vehicle;
  vehicleExchange: VehicleExchange;
  constructor(private gscService: GscService) { }

  ngOnInit(): void {
      this.gscService.getCarStock().subscribe(res => {
        this.carStock = [...res.vehicleOut, ...res.vehicleStock]
    })
  }

  fillForm(i){
    this.plate = this.carStock[i].plate
    this.price = this.carStock[i].price

    this.vehicle = this.carStock[i]
  }

  submitCarTransfer(){
    this.carStock = this.carStock.filter(car => car !== this.vehicle)

    this.vehicleExchange = {
      plate:this.vehicle.plate,
      vehProps:this.vehicle.vehProps,
      model:this.vehicle.model,
      price:this.price,
      owner:this.vehicle.owner,
      ssn:this.ssn
    }
    this.gscService.carTransfer(this.vehicleExchange).subscribe()
  }
}
