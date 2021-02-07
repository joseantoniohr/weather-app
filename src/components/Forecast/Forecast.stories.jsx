import React from 'react'
import Forecast from './Forecast'

export default {
  title: "Forecast",
  component: Forecast
}

const forecastItemList = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Lunes" },
  { hour: 18, state: "cloud", temperature: 17, weekDay: "Martes" },
  { hour: 18, state: "cloudy", temperature: 17, weekDay: "Miércoles" },
  { hour: 18, state: "fog", temperature: 17, weekDay: "Jueves" },
  { hour: 18, state: "rain", temperature: 17, weekDay: "Viernes" },
  { hour: 18, state: "cloud", temperature: 17, weekDay: "Sábado" },
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Domingo" }
]

export const ForecastExample = () => {
  return <Forecast forecastItemList={forecastItemList} />
}