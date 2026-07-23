import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Forecast.css'
import iconForecast from "../../assets/navigation/IconForecast.svg"
import { Link } from 'react-router-dom';
import windRose from "../../assets/navigation/windroos/windRoosVol.svg";

function Forecast({ location }) {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    // const forecastLink = `https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`;
    const forecastLink = `https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=78.22334&lon=16.64689&units=metric&appid=${apiKey}`;
    // const forecastLink = `https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`;


    const [forecastH, setForecastH] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function fetchfForecastH() {
        toggleLoading(true);
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
                <li className='box-xs'>
                    <h3>+1H</h3>
                    <img
                        src={`https://openweathermap.org/img/wn/${forecastH?.data[1]?.weather[0]?.icon}@2x.png`}
                        alt={forecastH?.data[1]?.weather[0]?.description}
                    />
                    <h3>{forecastH?.data[1]?.temp}º</h3>
                    <img
                        src={windRose}
                        alt='windroos'
                        style={{
                            transform: `rotate(${forecastH?.data[1]?.wind_deg || 0}deg)`,
                            transition: "transform 0.2s ease"
                        }}
                    />
                    <h3>{forecastH?.data[1]?.wind_speed}</h3>

                </li>
                <li className='box-xs'>
                    <h3>+2H</h3>
                    <img
                        src={`https://openweathermap.org/img/wn/${forecastH?.data[2]?.weather[0]?.icon}@2x.png`}
                        alt={forecastH?.data[2]?.weather[0]?.description}
                    />
                    <h3>{forecastH?.data[2]?.temp}º</h3>
                    <img
                        src={windRose}
                        alt='windroos'
                        style={{
                            transform: `rotate(${forecastH?.data[2]?.wind_deg || 0}deg)`,
                            transition: "transform 0.2s ease"
                        }}
                    />
                    <h3>{forecastH?.data[2]?.wind_speed}</h3>

                </li><li className='box-xs'>
                <h3>+3H</h3>
                <img
                    src={`https://openweathermap.org/img/wn/${forecastH?.data[3]?.weather[0]?.icon}@2x.png`}
                    alt={forecastH?.data[3]?.weather[0]?.description}
                />
                <h3>{forecastH?.data[3]?.temp}º</h3>
                <img
                    src={windRose}
                    alt='windroos'
                    style={{
                        transform: `rotate(${forecastH?.data[3]?.wind_deg || 0}deg)`,
                        transition: "transform 0.2s ease"
                    }}
                />
                <h3>{forecastH?.data[3]?.wind_speed}</h3>

            </li><li className='box-xs'>
                <h3>+4H</h3>
                <img
                    src={`https://openweathermap.org/img/wn/${forecastH?.data[4]?.weather[0]?.icon}@2x.png`}
                    alt={forecastH?.data[4]?.weather[0]?.description}
                />
                <h3>{forecastH?.data[4]?.temp}º</h3>
                <img
                    src={windRose}
                    alt='windroos'
                    style={{
                        transform: `rotate(${forecastH?.data[4]?.wind_deg || 0}deg)`,
                        transition: "transform 0.2s ease"
                    }}
                />
                <h3>{forecastH?.data[4]?.wind_speed}</h3>

            </li>
            </ul>
        </div>
    );
}

export default Forecast;