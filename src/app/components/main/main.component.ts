import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  links = [
    {
      label:"Car Stock",
      path:""
    },
    {
      label:"Plate Changer",
      path:"/plates"
    },
    {
      label:"Car Sales",
      path:"/sales"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
