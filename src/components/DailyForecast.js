import React from 'react';
import moment from 'moment';

import { setIcon } from '../helpers/setIcon';

function DailyForecast({ forecast }) {
  const { daily } = forecast;

  return daily.data.map(data => {
    const timeStamp = moment.unix(data.time);
    const dayOfWeek = timeStamp.format('ddd');

    return (
      <div className="daily-row" key={data.time}>
        <div className="day">{dayOfWeek}</div>
        <i className={setIcon(data.icon)} />
        <div>
          <span style={{ color: 'orange' }}>
            H {Math.round(data.temperatureHigh)}
          </span>{' '}
          <span style={{ color: 'dodgerblue' }}>
            L {Math.round(data.temperatureMin)}
          </span>
        </div>
      </div>
    );
  });
}

export default DailyForecast;
