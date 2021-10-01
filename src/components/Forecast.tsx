import * as React from 'react';
import ForecastTile from './ForecastTile';
import '../styles/Forecast.css';

interface Props {
  days: any[]
  // TODO: add props
}

const Forecast = (props: Props) => {
  const forecastTiles = props.days.map(day => {
    return (
      <ForecastTile />
    )
  });

  return (
    <div className='forecast'>
      {forecastTiles}
    </div>
  )
}

export default Forecast;