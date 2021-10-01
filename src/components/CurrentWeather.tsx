import * as React from 'react';
import '../styles/CurrentWeather.css';

interface Props {
  // TODO: add props
}

const CurrentWeather = (props: Props) => {
  return (
    <>
      <div className='current-weather'>
        <div className='current-temperature'>
          <div>
            93*
          </div>
          <div>
            [ICON]
          </div>
          <div className='current-conditions'>
            <span>Partly Cloudy</span>
            <span>12 mph</span>
          </div>
        </div>
        <div>
          TOGGLE
        </div>
      </div>
    </>
  )
}

export default CurrentWeather;