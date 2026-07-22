import React from 'react';
import './Forecast.css'
import { Link } from 'react-router-dom';

function Forecast() {
    return (
        <div className="box-m">
            <span className="row-start">
                <p>image icon</p>
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