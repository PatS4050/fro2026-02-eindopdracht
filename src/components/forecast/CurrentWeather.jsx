import React, {useEffect, useState} from "react";
import axios from "axios";
import './CurrentWeather.css';
import windRose from "../../assets/navigation/windroos/windRoosVol.svg";
import {msToBft} from "../utils/windMsToBft.js";

function CurrentWeather({latitude, longitude}) {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const [weather, setWeather] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
                );

                setWeather(response.data);
            } catch (e) {
                toggleError(true)
                console.error(e);
            } finally {
                toggleLoading(false);
            }
        }

        fetchWeather();
    }, [latitude, longitude]);

    if (!weather) {
        return <p>ben weer laden...</p>;
    }

    return (
        <div className='box-rxs-none'>
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
            />
            <h3>
                {weather.main.temp.toFixed(0)}ºC
            </h3>

                <img
                    src={windRose}
                    alt='windroos'
                    style={{
                        transform: `rotate(${weather?.wind_deg || 0}deg)`,
                        transition: "transform 0.2s ease"
                    }}
                />
            <h3>
                {msToBft(weather.wind.speed)} Bft
            </h3>
        </div>
    );
}

export default CurrentWeather;