import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'

const dataExample = [
  {
      "dayHour": "Jue 18",
      "min": 14,
      "max": 22,
  },
  {
      "dayHour": "Vie 06",
      "min": 18,
      "max": 27,
  },
  {
      "dayHour": "Vie 12",
      "min": 18,
      "max": 28,
  },
  {
      "dayHour": "Vie 18",
      "min": 18,
      "max": 25,
  },
  {
      "dayHour": "Sab 06",
      "min": 15,
      "max": 22,
  },
  {
      "dayHour": "Sab 12",
      "min": 12,
      "max": 19,
  }
]

const forecastItemListExample = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Lunes" },
  { hour: 18, state: "cloud", temperature: 17, weekDay: "Martes" },
  { hour: 18, state: "cloudy", temperature: 17, weekDay: "Miércoles" },
  { hour: 18, state: "fog", temperature: 17, weekDay: "Jueves" },
  { hour: 18, state: "rain", temperature: 17, weekDay: "Viernes" },
  { hour: 18, state: "cloud", temperature: 17, weekDay: "Sábado" },
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Domingo" }
]

const CityPage = () => {
  const city = "Buenos Aires"
  const country = "Argentina"
  const state = "sunny"
  const temperature = 20
  const humidity = 80
  const wind = 10
  const data = dataExample
  const forecastItemList = forecastItemListExample

  return (
    <AppFrame>
      <Grid container justify="space-around" direction="column" spacing={2}>
        <Grid container item justify="center" alignItems="flex-end" xs={12}>
          <CityInfo city={city} country={country}></CityInfo>
        </Grid>
        <Grid container item justify="center" xs={12}>
          <Weather state={state} temperature={temperature} />
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        <Grid item xs={12}>
          <ForecastChart data={data} />
        </Grid>
        <Grid item xs={12}>
          <Forecast forecastItemList={forecastItemList} />
        </Grid>
      </Grid>
    </AppFrame>
  )
}

export default CityPage
