import React from 'react'
import ForecastItem from './ForecastItem'

export default {
  title: "ForecastItem",
  component: ForecastItem
}

export const ViernesSoleado = () => {
  return <ForecastItem weekDay="Viernes" hour={17} state="sunny" temperature={21} />
}
