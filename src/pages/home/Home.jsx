import React, {useEffect, useState} from 'react';
import './Home.css'
import NavBar from "../../components/navbar/NavBar.jsx";
import Synopsis from "../../components/synopsis/Synopsis.jsx";
import Forecast from "../../components/forecast/Forecast.jsx";
import axios from "axios";

function Home({location}) {
    /////////// Huidige positie bepalen //////////
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const weatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`;
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");
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
        void fetchCurrent();
    }, [location]);

    return (
        <>
            <NavBar
                location={location}
                weather={weather}
            />
            <main>
                <Synopsis
                    location={location}
                    weather={weather}
                />
                <Forecast location={location}/>
            </main>
        </>

    );
}

export default Home;