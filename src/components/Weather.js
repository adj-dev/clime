import React from 'react';

import ForecastCard from './ForecastCard';

function Weather(props) {
  return <ForecastCard forecast={props.forecast} iconClass={props.iconClass} />;
}

export default Weather;
