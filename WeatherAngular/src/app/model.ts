export interface Weather{
  cityname:string,
  temp: number,
  weather:WeatherArray[]
}

export interface WeatherArray{
  id: number
  main: string,
  description: string,
  icon: string
}
