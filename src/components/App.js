import React, { Component } from 'react';
import axios from 'axios';

import '../main.css';
import '../weather-icons/style/weather-icons.min.css';
import { setIcon } from '../helpers/setIcon';

import Header from './Header';
import Weather from './Weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      userCoords: {
        lat: null,
        lon: null
      },
      forecast: null,
      iconClass: '',
      cityName: null
    };
  }

  componentDidMount() {
    this.fetchGeoLoc();
  }

  fetchGeoLoc() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState(
        {
          userCoords: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
        },
        () => {
          const lat = this.state.userCoords.lat;
          const lon = this.state.userCoords.lon;

          this.fetchWeather(lat, lon);
          this.getCityName(lat, lon);
        }
      );
    });
  }

  fetchWeather(lat, lon) {
    axios
      .get(`/${process.env.REACT_APP_DARKSKY_KEY}/${lat},${lon}`)
      .then(response =>
        this.setState({
          forecast: response.data,
          isLoaded: true,
          iconClass: setIcon(response.data.currently.icon)
        })
      );
  }

  getCityName(lat, lon) {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${
          process.env.REACT_APP_MAPS_KEY
        }`
      )
      .then(response => {
        let city = response.data.results[0].address_components[2].long_name;
        let state = response.data.results[0].address_components[4].short_name;
        this.setState({
          cityName: `${city}, ${state}`
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Weather
          forecast={this.state.forecast}
          iconClass={this.state.iconClass}
          cityName={this.state.cityName}
        />
      </div>
    );
  }
}

export default App;
