import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-container',
  templateUrl: './car-container.component.html',
  styleUrls: ['./car-container.component.scss']
})
export class CarContainerComponent implements OnInit {
  time = new Date();
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    },1000)
  }

  test(){
    alert("hello")
  }

}
