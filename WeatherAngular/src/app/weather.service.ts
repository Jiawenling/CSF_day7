import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Weather} from "./model";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cities = ["Singapore", "Tokyo", "London", "Bangkok", "Italy"]

  constructor(private http:HttpClient) { }

  getWeatherData(URL:string): Promise<Weather>{
    return lastValueFrom(this.http.get<Weather>(URL))
  }

  addCity(cityToAdd: string){
    this.cities.push(cityToAdd)
    console.info(this.cities)
    return this.cities
}


}

