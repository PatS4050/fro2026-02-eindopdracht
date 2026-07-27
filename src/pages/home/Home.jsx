import React, {useEffect, useState} from 'react';
import './Home.css'
import NavBar from "../../components/navbar/NavBar.jsx";
import Synopsis from "../../components/synopsis/Synopsis.jsx";
import Forecast from "../../components/forecast/Forecast.jsx";
import axios from "axios";

function Home() {
    /////////// Huidige positie bepalen //////////
    const [location, setLocation] = useState({ latitude: 78.22334, longitude: 16.64689}); // Longyearbyen
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const weatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`;
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => {
                setError("Locatie niet gevonden, standaardlocatie wordt gebruikt.");
                console.error(error);
            }
        )
    }, []);
    //////////////////////////////////////////////////
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