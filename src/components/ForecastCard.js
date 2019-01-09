import React from 'react';

function ForecastCard({ forecast, iconClass }) {
  console.log(forecast);
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
          <span>{summary}</span>
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
