import React from 'react';
import {useEffect, useState} from "react";
// import axios from "axios";
import './Position.css';
import locationImage from "../../assets/navigation/navIconLoc.svg";

function Position() {
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

        )}, []);
    return (
                <span>
                    <img src={locationImage} alt='location pointer' />
                    <p>{location.latitude.toFixed(2)} - {location.longitude.toFixed(2)}</p>
                </span>


    )}

export default Position;




