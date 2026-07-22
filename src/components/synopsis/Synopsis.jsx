import React, {useState, useEffect} from 'react';
import axios from "axios";
import './Synopsis.css'
import {Link} from 'react-router-dom';

// key: 64f39b1455a14828d42e76afd154b66f


function Home() {
    const weatherLink = 'https://api.openweathermap.org/data/2.5/weather?lat=78.22334&lon=16.64689&units=metric&appid=64f39b1455a14828d42e76afd154b66f';
    const [weather, setWeather] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function fetchCurrent() {
        toggleLoading(true);
        toggleError(false);
        try {
            const response = await axios.get(weatherLink, {});
            setWeather(response.data);
            console.log(response.data);
        } catch (e) {
            toggleError(true)
            console.error(e);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void fetchCurrent()
    }, []);

    return (
        <div className="basis">
            <ul className="basis">
                <li className="row-center"><h4>TEMP</h4><h4>PRESSURE</h4></li>
                <li><p>{weather.main?.temp} ºC | {weather.main?.pressure} hPa</p></li>
            </ul>
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}
                alt={weather.weather?.[0]?.description}
            />
            <p> Winddirection visual</p>
            <ul className="basis">
                <li className="row-center"><h4>DIRECTION</h4><h4>FORCE</h4></li>
                <li><p> {weather.wind?.deg} º | {weather.wind?.speed} m/s</p></li>
                <li><h4>{weather.weather?.[0]?.description}</h4></li>
            </ul>
        </div>
    );
}

export default Home;