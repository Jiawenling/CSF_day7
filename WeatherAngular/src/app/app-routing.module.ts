import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NumberComponent} from "./number/number.component";
import {MainComponent} from "./main/main.component";
import {WeatherMainComponent} from "./components/weather-main/weather-main.component";
import {WeatherViewComponent} from "./components/weather-view/weather-view.component";

// const routes: Routes = [{path:'', component:MainComponent},
//   {path:"number/:nums", component:NumberComponent}];

const routes: Routes = [{path:'', component:WeatherMainComponent},
  {path:"weather/:city", component:WeatherViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
