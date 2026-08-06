import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Forecast.css'
import iconForecast from "../../assets/navigation/IconForecast.svg"
import windRose from "../../assets/navigation/windroos/windRoosVol.svg";
import {msToBft} from "../utils/windMsToBft.js";

function Forecast({ location }) {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const forecastLink = `https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`;


    const [forecastH, setForecastH] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

//     const msToBft = {
//         [0, 0.2] :0,
//         [0.3, 1.5] :1,
//         [1.6, 3.3] :2,
//         [3.4, 5.4] :3,
//         [5.5, 7.9] :4,
//         [8.0, 10.7] :5,
//         [10.8, 13.8] :6,
//         [13.9, 17.1] :7,
//         [17.2, 20.7] :8,
//         [20.8, 24.4] :9,
//         [24.5, 28.4] :10,
//         [28.5, 32.6] :11,
//         [32.7, 50] :12,
// }

    async function fetchfForecastH() {
        toggleLoading(true);
        try {
            const response = await axios.get(forecastLink, {})
            setForecastH(response.data);
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
                {[1,2,3,4].map((hour) => (
                <li className='box-xs' key={hour}>
                    <h3>+{hour}H</h3>
                    <img
                        src={`https://openweathermap.org/img/wn/${forecastH?.data[hour]?.weather[0]?.icon}@2x.png`}
                        alt={forecastH?.data[hour]?.weather[0]?.description}
                    />
                    <h3>{forecastH?.data[hour]?.temp?.toFixed(0)}º</h3>
                    <img
                        src={windRose}
                        alt='windroos'
                        style={{
                            transform: `rotate(${forecastH?.data[hour]?.wind_deg || 0}deg)`,
                            transition: "transform 0.2s ease"
                        }}
                    />
                    <h3>{msToBft(forecastH?.data[hour]?.wind_speed)} Bft</h3>
                </li>
                ))}

            </ul>
        </div>
    );
}

export default Forecast;