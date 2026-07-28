import React, {useEffect} from 'react';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import './App.css'
import Home from "./pages/home/Home.jsx";
import WeatherChoice from "./pages/weatherchoice/WeatherChoice.jsx";
import SignIn from "./pages/signin/SignIn.jsx";
import Background from "./pages/background/Background.jsx";
import Predictions from "./pages/predictions/Predictions.jsx";
import Location from "./pages/location/Location.jsx";
import axios from "axios";



function App() {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const [location, setLocation] = useState({ latitude: 78.22334, longitude: 16.64689, name: "Longyearbyen"}); // Longyearbyen
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const changeLocation = (lat, lon, name) => {
        setLocation({
            latitude: lat,
            longitude: lon,
            name:name
        })};

    useEffect(() => {
        async function getCurrentLocation() {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    try {
                        const response = await axios.get(
                            `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`
                        );

                        const city = response.data[0];

                        setLocation({
                            latitude: lat,
                            longitude: lon,
                            name: city.name,
                        });

                    } catch (error) {
                        console.error(error);

                        setLocation({
                            latitude: lat,
                            longitude: lon,
                            name: "locatie onbekend",
                        });
                    }
                },
            );
        }

        getCurrentLocation();
    }, []);


    return (
        <>
            <div className="content">
                <Routes>
                    <Route path="/" element={ <Home location={location}/>} />
                    {/*<Route exact path="/" element={<Home />}/>*/}
                    {/*<Route path="/profile" element={ isAuth ? <Profile /> : <Navigate to="/" />}/>*/}
                    <Route path="/signin" element={ <SignIn />} />
                    <Route path="/location" element={<Location
                        location={location}
                        setLocation={setLocation}
                        changeLocation={changeLocation}
                    />} />
                    <Route path="/background" element={<Background />} />
                    <Route path="/predictions" element={<Predictions location={location}/>} />
                    <Route path="/weatherchoice" element={<WeatherChoice />} />
                </Routes>
            </div>

        </>
    )
}

export default App
