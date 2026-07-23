import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Forecast.css'
import iconForecast from "../../assets/navigation/IconForecast.svg"
import { Link } from 'react-router-dom';

function Forecast(location) {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    // const forecastLink = `https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`;
    const forecastLink = `https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=78.22334&lon=16.64689&units=metric&appid=${apiKey}`;
    // const forecastLink = `https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`;


    const [forecastH, setForecastH] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function fetchfForecastH() {
        try {
            const response = await axios.get(forecastLink, {})
            setForecastH(response.data);
            console.log(response.data);

        } catch (e) {
            toggleError(true)
            console.error(e);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void fetchfForecastH();
    }, [location]);

    return (
        <div className="box-m">
            <span className="row-start">
                <img src={iconForecast} alt="icon of a weather prediction"/>
                 <h3>HOURLY FORECAST</h3>
            </span>
            <ul>
                <li><p> now</p></li>
                <li><p> +1H</p></li>
                <li><p> +2H</p></li>
                <li><p> +3H</p></li>
            </ul>
        </div>
    );
}

export default Forecast;