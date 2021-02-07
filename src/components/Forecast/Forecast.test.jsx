import React from 'react'
import { render } from '@testing-library/react'
import Forecast from './Forecast'

const forecastItemList = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Lunes" },
  { hour: 18, state: "cloud", temperature: 17, weekDay: "Martes" },
  { hour: 18, state: "cloudy", temperature: 17, weekDay: "Miércoles" },
  { hour: 18, state: "fog", temperature: 17, weekDay: "Jueves" },
  { hour: 18, state: "rain", temperature: 17, weekDay: "Viernes" },
  { hour: 18, state: "cloud", temperature: 17, weekDay: "Sábado" },
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Domingo" }
]

test("Forecast render", async () => {
  // Encontrar items
  const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />)

  const forecastItems = await findAllByTestId("forecast-item-container")

  expect(forecastItems).toHaveLength(7)

})