import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IVehicle,RootObject } from '../interfaces/ivehical';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url = "https://random-data-api.com/api/color/random_color";
  constructor(private httpClient:HttpClient) { }
  users(){
    return this.httpClient.get(this.url);
  }
  getRandomVehicle(): Observable<IVehicle> {
    const url = "https://random-data-api.com/api/vehicle/random_vehicle"
    return this.httpClient.get<IVehicle>(url);
  }

  getRandomHero(id: string): Observable<RootObject> {
    
    const url = "https://www.superheroapi.com/api/5067740473254507/"+id;
    return this.httpClient.get<RootObject>(url);
  }
}
