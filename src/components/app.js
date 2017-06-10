import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
        <div>
            <div className="container">
                <SearchBar />
            </div>
            <div className="container">
                <WeatherList />
            </div>
        </div>
    );
  }
}
