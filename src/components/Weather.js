import React, { Component } from 'react';
import axios from 'axios';

import ForecastCard from './ForecastCard';
import { setIcon } from '../helpers/setIcon';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      userCoords: {
        lat: Number,
        lon: Number
      },
      forecast: null,
      iconClass: String
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position =>
      this.setState(
        {
          userCoords: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
        },
        () => {
          this.fetchWeather();
        }
      )
    );
  }

  fetchWeather() {
    const lat = this.state.userCoords.lat;
    const lon = this.state.userCoords.lon;

    axios
      .get(`/${process.env.REACT_APP_API_KEY}/${lat},${lon}`)
      .then(response =>
        this.setState({
          forecast: response.data,
          isLoaded: true,
          iconClass: setIcon(response.data.currently.icon)
        })
      );
  }

  render() {
    return (
      <ForecastCard
        forecast={this.state.forecast}
        iconClass={this.state.iconClass}
      />
    );
  }
}

export default Weather;
