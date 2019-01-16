import React from 'react';
import axios from 'axios';

function Header(props) {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${
        process.env.REACT_APP_MAPS_KEY
      }`
    )
    .then(result => {
      console.log(result);
    });

  return (
    <div className="header">
      <div className="title">Weather for Elk River, MN</div>
      <div className="credit">
        <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
      </div>
    </div>
  );
}

export default Header;
