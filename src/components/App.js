import React from 'react';

import '../main.css';
import '../weather-icons/style/weather-icons.min.css';

import Header from './Header';
import Weather from './Weather';

function App() {
  return (
    <div>
      <Header />
      <Weather />
    </div>
  );
}

export default App;
