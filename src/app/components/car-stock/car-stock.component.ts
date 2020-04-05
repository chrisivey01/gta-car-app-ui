import { GscService } from './../../services/gsc.service';
import { CarStock } from './../model/CarStock';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-stock',
  templateUrl: './car-stock.component.html',
  styleUrls: ['./car-stock.component.scss']
})
export class CarStockComponent implements OnInit {
  carStock;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.data.length < 6 || event.previousContainer.data.length <= 6) {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
  }

  constructor(private gscService: GscService) { }

  ngOnInit(): void {
    this.gscService.getCarStock().subscribe(res => {
        this.carStock = res
    })
  }

  submit(){
    this.gscService.updateCarStock(this.carStock).subscribe(res => {
      console.log(JSON.stringify(res))
    },
    error => {
      console.log(JSON.stringify(error))
    })
  }
}
