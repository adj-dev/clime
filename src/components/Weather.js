import React, { Component } from 'react';
import axios from 'axios';

import ForecastCard from './ForecastCard';

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
      forecast: {},
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

  setIcon(desc) {
    switch (desc) {
      case 'clear-day':
        return 'wi wi-day-sunny';
      case 'clear-night':
        return 'wi wi-night-clear';
      case 'rain':
        return 'wi wi-rain';
      case 'snow':
        return 'wi wi-snow';
      case 'sleet':
        return 'wi wi-sleet';
      case 'wind':
        return 'wi wi-windy';
      case 'fog':
        return 'wi wi-fog';
      case 'cloudy':
        return 'wi wi-cloudy';
      case 'partly-cloudy-day':
        return 'wi wi-day-cloudy';
      case 'partly-cloudy-night':
        return 'wi wi-night-alt-cloudy';
      default:
        return 'wi wi-na';
    }
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
          iconClass: this.setIcon(response.data.currently.icon)
        })
      );
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Finding your location...</div>;
    } else {
      return (
        <ForecastCard
          forecast={this.state.forecast}
          iconClass={this.state.iconClass}
        />
      );
    }
  }
}

export default Weather;
