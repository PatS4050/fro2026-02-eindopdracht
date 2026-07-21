import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './NavBar.css'

function NavBar() {
    const [location, setLocation] = useState(null);
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
                console.error(error);
            }
        );
    }, []);
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <button></button>
                    </li>
                    <li>
                       <span>
                            <p>{location.latitude.toFixed(3)} - {location.longitude.toFixed(3)} </p>
                       </span>
                    </li>
                    <li>
                        <button></button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;




