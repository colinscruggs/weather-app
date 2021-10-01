import * as React from 'react';
import '../styles/LocationHeader.css';

interface Props {
  // TODO: add props
}

const LocationHeader = (props: Props) => {
  return (
    <div className='location-header'>
      <div className='location-city'>
        <span>[I]</span>
        <span>Dallas, TX</span>
      </div>
      <div className='current-date'>
        <span>Saturday, Sep 16, 2021</span>
      </div>
    </div>
  )
}

export default LocationHeader;