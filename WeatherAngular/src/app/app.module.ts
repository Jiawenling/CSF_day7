import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { MainComponent } from './main/main.component';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';
import { WeatherViewComponent } from './components/weather-view/weather-view.component';
import {HttpClientModule} from "@angular/common/http";
import {WeatherService} from "./weather.service";

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    MainComponent,
    WeatherMainComponent,
    WeatherViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
