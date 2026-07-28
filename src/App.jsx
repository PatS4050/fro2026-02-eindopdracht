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

    const [location, setLocation] = useState({ latitude: 78.22334, longitude: 16.64689}); // Longyearbyen


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
