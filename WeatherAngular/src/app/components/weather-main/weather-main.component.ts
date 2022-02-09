import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../weather.service";

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {


  cities:string[]=[]
  constructor(private weatherSvc:WeatherService) { }

  ngOnInit(): void {
    this.cities = this.weatherSvc.cities
  }

  addCity(){
    // @ts-ignore
    let cityToAdd =document.querySelector("input").value

    this.cities= this.weatherSvc.addCity(cityToAdd);
  }

}
