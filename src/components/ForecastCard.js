import React from 'react';

import DailyForecast from './DailyForecast';

function ForecastCard({ forecast, iconClass }) {
  // Render loading message while forecast is being fetched
  if (!forecast) {
    return (
      <div className="container">
        <div className="card">Getting forecast...</div>
      </div>
    );
  }

  const { summary, temperature } = forecast.currently;
  const roundedTemp = Math.round(temperature);
  return (
    <div className="container">
      <div className="card">
        <div className="big-info">
          <i className={iconClass} />
          <div className="temp">
            {roundedTemp}
            <i className="wi wi-fahrenheit" />
          </div>
        </div>
        <div className="small-info">
          Currently: <span>{summary}</span>
        </div>
        <div className="daily-forecast">
          <DailyForecast forecast={forecast} />
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
