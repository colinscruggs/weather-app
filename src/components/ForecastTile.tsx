import * as React from 'react';
import '../styles/Forecast.css';

interface Props {
  // TODO: add props
}

const ForecastTile = (props: Props) => {
  return (
    <div className='forecast-tile'>
      <span>
        Day
      </span>
      <span>
        [ICON]
      </span>
      <span>
        Temp
      </span>
    </div>
  )
}

export default ForecastTile;