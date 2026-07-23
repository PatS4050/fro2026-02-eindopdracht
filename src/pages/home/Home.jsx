import React, {useEffect, useState} from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import NavBar from "../../components/navbar/NavBar.jsx";
import Synopsis from "../../components/synopsis/Synopsis.jsx";
import Forecast from "../../components/forecast/Forecast.jsx";

function Home() {

    /////////// Huidige positie bepalen //////////
    const [location, setLocation] = useState({
        latitude: 78.22334,   // Longyearbyen
        longitude: 16.64689,
    });
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

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


    return (
        <>
            <NavBar location={location}/>
            <main>
                <Synopsis location={location}/>
                <Forecast/>
            </main>
        </>

    );
}

export default Home;