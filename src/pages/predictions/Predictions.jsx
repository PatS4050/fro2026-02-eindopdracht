import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../../components/navbar/NavBar.jsx";
import Synopsis from "../../components/synopsis/Synopsis.jsx";
import Forecast from "../../components/forecast/Forecast.jsx";
import ForecastH from "../../components/forecast/ForecastH.jsx";

function Predictions({location}) {
    return (
        <><NavBar
            location={location}
        />
            <main>
                <h2>weersvoorspelling</h2>
                <ForecastH
                    location={location}
                />
            </main>
        </>
    );
}

export default Predictions;