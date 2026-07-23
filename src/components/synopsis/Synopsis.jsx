import React, {useState, useEffect} from 'react';
import axios from "axios";
import './Synopsis.css'
import windRose from '../../assets/navigation/windroos/windRoosSimple.svg'
import {Link} from 'react-router-dom';

// key: 64f39b1455a14828d42e76afd154b66f
// key: 97b027d3a37bcaea6dcba72656f5f9a1


function Synopsis({location}) {
    // const weatherLink = 'https://api.openweathermap.org/data/2.5/weather?lat=${location?.latitude.toFixed(5)}&lon=16.64689&units=metric&appid=64f39b1455a14828d42e76afd154b66f';

    // const weatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude.toFixed(5)}&lon=${location.longitude.toFixed(5)}&units=metric&appid=64f39b1455a14828d42e76afd154b66f`;
    const weatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=64f39b1455a14828d42e76afd154b66f`;

    // const weatherLink = 'https://api.openweathermap.org/data/4.0/onecall/current?lat=78.22334&lon=16.64689&appid=97b027d3a37bcaea6dcba72656f5f9a1';
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

            // const response = await axios.get(
            //     `https://api.openweathermap.org/data/2.5/weather?`,
            //     {
            //         params: {
            //             latitude: 78.22334,
            //             longitude: 16.64689,
            //             // lat: location?.latitude,
            //             // lon: location?.longitude,
            //             units: "metric",
            //             appid: "J64f39b1455a14828d42e76afd154b66f",
            //         },
            //         console.log(response.data)
            //     }
            // );
            // setWeather(response.data);

        } catch (e) {
            toggleError(true)
            console.error(e);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void fetchCurrent();
    }, [location]);

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
            <img
                src={windRose}
                alt='windroos'
                style={{
                    transform: `rotate(${weather.wind?.deg || 0}deg)`,
                    transition: "transform 0.6s ease"
                }}
            />
            <ul className="basis">
                <li className="row-center"><h4>DIRECTION</h4><h4>FORCE</h4></li>
                <li><p> {weather.wind?.deg} º | {weather.wind?.speed} m/s</p></li>
                <li><h4>{weather.weather?.[0]?.description}</h4></li>
            </ul>
        </div>
    );
}

export default Synopsis;