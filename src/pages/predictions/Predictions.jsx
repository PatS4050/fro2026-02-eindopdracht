import React from 'react';
import ForecastH from "../../components/forecast/ForecastH.jsx";
import NavBarForcast from "../../components/navbar/NavBarForcast.jsx";

function Predictions({location}) {
    return (
        <>
            <NavBarForcast location={location} />
            <main>
                <ForecastH location={location} />
            </main>
        </>
    );
}

export default Predictions;