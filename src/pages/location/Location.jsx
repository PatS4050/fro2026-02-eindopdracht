import React, { useState} from 'react';
import NavBarLocation from "../../components/navbar/NavBarLocation.jsx";
import axios from "axios";

function Location({location}) {

    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const [searchLocation, setSearchLocation] = useState("");
    const [locationInfo, setLocationInfo] = useState({});
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${searchLocation}&limit=1&appid=${apiKey}`);
            const city = response.data;
            console.log(city);
            // sla de informatie van de plaats op in de state
            setLocationInfo(city);
            // maak het invoerveld weer leeg
            setSearchLocation('');

    } catch (e) {
        toggleError(true)
        console.error(e);
    } finally {
        toggleLoading(false);
    }
    }


    return (
        <>
            <NavBarLocation location={location} />
            <main>
                <form onSubmit={handleSubmit}>
                    <input className='box-rxs'
                           type="text"
                        value={searchLocation}
                        onChange={(e)=>setSearchLocation(e.target.value)}
                        placeholder="Longyearbyen"
                    />
                </form>
                <p>switch alle locatie en favorieten</p>
                <ul className='box-list'>
                    {locationInfo.map((tomato) =>(
                        <li className='box-rxs' key={'${tomato.longitude}'}>
                            {tomato.name}
                        </li>
                    ))}
                    <li className='box-rxs'>lijst locaties</li>
                </ul>

            </main>

        </>
    );
}

export default Location;