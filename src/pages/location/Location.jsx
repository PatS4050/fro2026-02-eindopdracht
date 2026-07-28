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
                <form onSubmit={searchLocation}>
                    <input className='box-rxs'
                        value='Longyearbyen'
                        onChange={(e)=>setSearchLocation(e.target.value)}
                        placeholder="Longyearbyen"
                    />
                </form>
                <p>switch alle locatie en favorieten</p>
                <ul className='box-list'>
                    <li className='box-rxs'>lijst locaties</li>
                </ul>

            </main>

        </>
    );
}

export default Location;