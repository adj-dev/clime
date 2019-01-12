import React from 'react';
import moment from 'moment';

import { setIcon } from '../helpers/setIcon';

function DailyForecast({ forecast }) {
  const { daily } = forecast;
  console.log(daily);

  return daily.data.map(data => {
    const timeStamp = moment.unix(data.time);
    const day = timeStamp.format('dddd');

    return (
      <div className="daily-row" key={data.time}>
        <div className="day">{day}</div>
        <i className={setIcon(data.icon)} />
        <div>{Math.round(data.temperatureHigh)}</div>
        <div>{Math.round(data.temperatureMin)}</div>
      </div>
    );
  });
}

export default DailyForecast;
