import React, {useState, useEffect} from 'react';
import axios from "axios";
import './Synopsis.css'
import windRose from '../../assets/navigation/windroos/windRoosSimple.svg'
import {msToBft} from "../utils/windMsToBft.js";

function Synopsis({location, weather}) {



    return (
        <div className="basis">
            <ul className="basis">
                <li className="row-center"><h4>TEMP</h4><h4>PRESSURE</h4></li>
                <li><p>{weather?.main?.temp.toFixed(0)} ºC | {weather?.main?.pressure} hPa</p></li>
            </ul>
            <img
                src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
                alt={weather?.weather?.[0]?.description}
            />
            <img
                src={windRose}
                alt='windroos'
                style={{
                    transform: `rotate(${weather?.wind?.deg || 0}deg)`,
                    transition: "transform 0.6s ease"
                }}
            />
            <ul className="basis">
                <li className="row-center"><h4>DIRECTION</h4><h4>FORCE</h4></li>
                <li><p> {weather?.wind?.deg} º | {msToBft(weather?.wind?.speed)} Bft</p></li>
                <li><h4>{weather?.weather?.[0]?.description}</h4></li>
            </ul>
        </div>
    );
}

export default Synopsis;