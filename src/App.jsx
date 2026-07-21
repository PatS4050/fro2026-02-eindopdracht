import React from 'react';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./pages/home/Home.jsx";
// import SignIn from "./pages/SignIn.js";
// import Background from "./pages/Background.js";
// import Predictions from "./pages/Predictions.js";
// import WeatherChoice from "./pages/WeatherChoice.js";


function App() {

    return (
        <>
            <div className="content">
                <Routes>
                    <Route path="/" element={ <Home />} />
                    {/*<Route exact path="/" element={<Home />}/>*/}
                    {/*<Route path="/profile" element={ isAuth ? <Profile /> : <Navigate to="/" />}/>*/}
                    {/*<Route path="/signin" element={ <SignIn />} />*/}
                    {/*<Route path="/location" element={<Location />} />*/}
                    {/*<Route path="/background" element={<Background />} />*/}
                    {/*<Route path="/predictions" element={<Predictions />} />*/}
                    {/*<Route path="/weatherchoice" element={<WeatherChoice />} />*/}
                </Routes>
            </div>

        </>
    )
}

export default App
