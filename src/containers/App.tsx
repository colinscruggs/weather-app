import React from 'react';
import LocationHeader from '../components/LocationHeader';
import '../styles/App.css';
import WidgetContainer from './WidgetContainer';

function App() {
  // TODO: add background style
  return (
    <div className="App"> 
      <LocationHeader />
      <WidgetContainer />
    </div>
  );
}

export default App;
