import React from 'react';
import moment from 'moment';

import { setIcon } from '../helpers/setIcon';

function DailyForecast({ forecast }) {
  const { daily } = forecast;
  console.log(daily);

  return daily.data.map(data => {
    const timeStamp = moment.unix(data.time);
    const dayOfWeek = timeStamp.format('ddd');
    console.log(timeStamp);

    return (
      <div className="daily-row" key={data.time}>
        <div className="day">{dayOfWeek}</div>
        <i className={setIcon(data.icon)} />
        <div>
          H {Math.round(data.temperatureHigh)} L{' '}
          {Math.round(data.temperatureMin)}
        </div>
      </div>
    );
  });
}

export default DailyForecast;
