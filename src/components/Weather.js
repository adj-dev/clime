import React from 'react';
import moment from 'moment';

import DailyForecast from './DailyForecast';

function Weather({ forecast, iconClass, cityName }) {
  // Show loading message while API is waiting for response
  if (!forecast) {
    return (
      <div className="container">
        <div className="big-display">Getting forecast...</div>
      </div>
    );
  }

  // Generate the current date to display
  const timeStamp = moment.unix(forecast.currently.time);
  const date = timeStamp.format('dddd, MMM Do');

  // Round the temperature to a whole number
  const { temperature } = forecast.currently;
  const roundedTemp = Math.round(temperature);

  return (
    <div className="container">
      <div className="big-display">
        <div className="icon-temp">
          <i className={iconClass} />
          <div className="temp">
            {roundedTemp}
            <span>&deg;F</span>
          </div>
        </div>
        <div className="location-date">
          <h1 style={{ fontWeight: '100' }}>{cityName}</h1>
          <h1>{date}</h1>
        </div>
      </div>
      <div className="weather-details">
        <div className="details">
          <h1>Currently: {forecast.currently.summary}</h1>
          <h1>
            Feels like: {Math.round(forecast.currently.apparentTemperature)}
            &deg;
          </h1>
        </div>
      </div>
      <div className="weather-weekly">
        <div className="daily-forecast">
          <DailyForecast forecast={forecast} />
        </div>
      </div>
    </div>
  );
}

export default Weather;
