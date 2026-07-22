import React from 'react';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./pages/home/Home.jsx";
import WeatherChoice from "./pages/weatherchoice/WeatherChoice.jsx";
import SignIn from "./pages/signin/SignIn.jsx";
import Background from "./pages/background/Background.jsx";
import Predictions from "./pages/predictions/Predictions.jsx";
import Location from "./pages/location/Location.jsx";



function App() {

    return (
        <>
            <div className="content">
                <Routes>
                    <Route path="/" element={ <Home />} />
                    {/*<Route exact path="/" element={<Home />}/>*/}
                    {/*<Route path="/profile" element={ isAuth ? <Profile /> : <Navigate to="/" />}/>*/}
                    <Route path="/signin" element={ <SignIn />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/background" element={<Background />} />
                    <Route path="/predictions" element={<Predictions />} />
                    <Route path="/weatherchoice" element={<WeatherChoice />} />
                </Routes>
            </div>

        </>
    )
}

export default App
