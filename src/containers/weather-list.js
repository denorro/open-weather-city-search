/**
 * Created by Denorro Stallworth on 6/8/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/sparkline-chart';
import GoogleMap from "../components/google-map";

class WeatherList extends Component {

    renderWeather(cityData){

        console.log(cityData);
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return(
            <tr key={ cityData.city.id }>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td>
                    <Chart data={temps} color={'red'} units={'K'} />
                </td>
                <td>
                    <Chart data={pressures} color={'green'} units={'hPA'} />
                </td>
                <td>
                    <Chart data={humidity} color={'blue'} units={'%'} />
                </td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>City</th><th>Temperature (K)</th><th>Pressure (hPA)</th><th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect( mapStateToProps)(WeatherList);