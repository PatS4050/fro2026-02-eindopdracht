import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import NavBar from "../../components/navbar/NavBar.jsx";
import Synopsis from "../../components/synopsis/Synopsis.jsx";
import Forecast from "../../components/forecast/Forecast.jsx";

function Home() {



    return (
        <>
            <NavBar />
            <main>
                <Synopsis />
                <Forecast />
            </main>
        </>

    );
}

export default Home;