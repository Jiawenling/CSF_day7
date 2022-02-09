import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WeatherService} from "../../weather.service";
import {Weather} from "../../model";

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {

  weatherURL: string = ""
  weatherResult!: Weather

  constructor(private activatedRoute: ActivatedRoute, private weatherSvc: WeatherService) { }

  ngOnInit(): void {
    let cityName = this.activatedRoute.snapshot.params["city"]
    this.weatherURL = "http://localhost:8080/api/weather/"+ cityName
    this.weatherSvc.getWeatherData(this.weatherURL).then(result => {
      this.weatherResult = result
    }).catch(error => {
      console.info(error)
    })
  }

}
