import { GscService } from './../../services/gsc.service';
import { Plates } from './../model/Plates';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plate-changer',
  templateUrl: './plate-changer.component.html',
  styleUrls: ['./plate-changer.component.scss']
})
export class PlateChangerComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  plates: Plates;

  constructor(private _formBuilder: FormBuilder, private gscService: GscService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });  
  }

  changePlate(){
    this.plates = {
      oldPlate: this.firstFormGroup.value.firstCtrl.toUpperCase(),
      newPlate: this.secondFormGroup.value.secondCtrl.toUpperCase()
    }

    this.gscService.changePlate(this.plates).subscribe(
      results => {
        console.log(results);
      },
      error => {
        console.log(JSON.stringify(error))
      })
  }
}
