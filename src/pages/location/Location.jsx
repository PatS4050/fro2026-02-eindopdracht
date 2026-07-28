import React, {useState} from 'react';
import NavBarLocation from "../../components/navbar/NavBarLocation.jsx";
import axios from "axios";

function Location({location}) {

    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const [searchLocation, setSearchLocation] = useState("");

    return (
        <>
            <NavBarLocation location={location} />
            <main>
                <p>Veld invoer locatie</p>
                <p>switch alle locatie en favorieten</p>
                <p>lijst locaties</p>
            </main>

        </>
    );
}

export default Location;