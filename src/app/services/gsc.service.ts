import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarStock } from '../components/model/CarStock';


@Injectable()
export class GscService  {
    constructor(private http: HttpClient){}

    url = "http://pma-grove-street-customs/"

    closeGSC(){
        const closeEvent = "CloseGscUi"
        return this.http.post(`http://pma-grove-street-customs/${closeEvent}`, {})
    }

    changePlate(plateInfo){
        const event = "UpdatePlate"
        return this.http.post(`http://pma-grove-street-customs/${event}`, plateInfo)
    }

    getCarStock(){
        const event = "GetCarStock"
        return this.http.post<CarStock>(`http://pma-grove-street-customs/${event}`, {})
    }

    updateCarStock(outCars){
        const event = "UpdateCarStock"
        return this.http.post(`http://pma-grove-street-customs/${event}`, outCars)
    }

    carTransfer(vehicleExchange){
        const event = "CarTransfer"
        return this.http.post(`http://pma-grove-street-customs/${event}`, vehicleExchange)
    }
    
}
