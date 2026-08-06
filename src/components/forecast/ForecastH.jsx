import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './ForecastH.css'
import windRose from "../../assets/navigation/windroos/windRoosVol.svg";
import {msToBft} from "../utils/windMsToBft.js";

function ForecastH1({location}) {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const forecastLink = `https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`;
    const [forecastH1, setForecastH1] = useState([]);
    const [period, setPeriod] = useState(1)
    const [nextLink, setNextLink] = useState(null);
    const [nextForecasts, setNextForecasts] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function fetchfForecastH1() {
        toggleLoading(true);
        try {
            const response = await axios.get(forecastLink, {})
            // setForecastH1(response.data);
            setForecastH1(prev => [
                ...prev,
                ...response.data.data
                ]);
            setNextLink(response.data.next);
        } catch (e) {
            toggleError(true)
            console.error(e);
        } finally {
            toggleLoading(false);
        }
    }
    // async function get12Hours() {
    //     // toggleLoading(true);
    //     setPeriod(12);
    //
    //     if (nextLink) {
    //         await fetchForecastH1(nextLink);
    //     }
    //
    // }

    useEffect(() => {
        fetchfForecastH1();
    }, [location]);

    return (

        <div>
            <span className="predictions">
                <button className='button-predictions' type="button" onClick={() => setPeriod(1)}>per uur</button>
                <button className='button-predictions' type="button" onClick={() => setPeriod(3)}>elke 3 uur</button>
                <button className='button-predictions' type="button" onClick={() => setPeriod(12)}>elke 12 uur</button>
            </span>
            <ul className='box-list'>
                <li className='row-between'><h4>Tijd</h4><h4>Weer</h4><h4>Temp</h4><h4>Richting</h4><h4>Kracht</h4></li>
                {forecastH1?.filter((_, index) => index % period === 0).slice(0,7).map((prediction, index) => (
                    <li className='box-rxs' key={prediction.dt}>
                        <h3>+{index * period}H</h3>
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
                        <h3>{msToBft(prediction?.wind_speed)} Bft</h3>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default ForecastH1;