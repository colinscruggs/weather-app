import * as React from 'react';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import bg from '../assets/dallas_bg.png';
import '../styles/WidgetContainer.css';

interface Props {
  // TODO: add props
}

const WidgetContainer = (props: Props) => {
  return (
    <div className='widget-container'>
      <CurrentWeather />
      <img src={bg} alt='Dallas' />
      <Forecast days={['one', 'two', 'three', 'four', 'five']} />
    </div>
  )
}

export default WidgetContainer;