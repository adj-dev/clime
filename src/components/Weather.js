import React from 'react';
import moment from 'moment';

import DailyForecast from './DailyForecast';

function Weather({ forecast, iconClass, cityName }) {
  if (!forecast) {
    return (
      <div className="container">
        <div className="weather-currently">Getting forecast...</div>
      </div>
    );
  }

  const timeStamp = moment.unix(forecast.currently.time);
  const date = timeStamp.format('dddd, MMM Do');

  console.log(timeStamp);

  const { temperature } = forecast.currently;
  const { summary } = forecast.minutely;
  const roundedTemp = Math.round(temperature);
  return (
    <div className="container">
      <div className="weather-currently">
        <div className="big-info">
          <i className={iconClass} />
          <div className="temp">
            {roundedTemp}
            <span>&deg;F</span>
          </div>
        </div>
        <div className="small-info">
          <h1 style={{ fontWeight: '100' }}>{cityName}</h1>
          <h1>{date}</h1>
          <p>{summary}</p>
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
