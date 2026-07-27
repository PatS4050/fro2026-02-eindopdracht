import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Forecast.css'
import iconForecast from "../../assets/navigation/IconForecast.svg"
import { Link } from 'react-router-dom';
import windRose from "../../assets/navigation/windroos/windRoosVol.svg";

function ForecastH1({ location }) {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const forecastLink = `https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`;


    const [forecastH1, setForecastH1] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function fetchfForecastH1() {
        toggleLoading(true);
        try {
            const response = await axios.get(forecastLink, {})
            setForecastH1(response.data);
            console.log(response.data);
        } catch (e) {
            toggleError(true)
            console.error(e);
        } finally {
            toggleLoading(false);
        }
    }

    return (
        <div className="box-m">
            <span className="row-start">
            <button type="button" onClick={fetchfForecastH1}>Hourly</button>
            </span>
            <ul>
                {forecastH1?.hourly?.map((prediction, index) => (
                <li className='box-xs' key={prediction.dt}>
                    <h3>+{index}H</h3>
                    <img
                        src={`https://openweathermap.org/img/wn/${prediction?.weather[0]?.icon}@2x.png`}
                        alt={prediction?.weather[0]?.description}
                    />
                    <h3>{prediction?.temp.toFixed(0)}º</h3>
                    <img
                        src={windRose}
                        alt='windroos'
                        style={{
                            transform: `rotate(${prediction?.wind_deg || 0}deg)`,
                            transition: "transform 0.2s ease"
                        }}
                    />
                    <h3>{prediction?.wind_speed}</h3>

                </li>
                    ))}
            </ul>
        </div>
    );
}

export default ForecastH1;