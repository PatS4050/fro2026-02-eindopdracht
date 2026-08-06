import React from 'react';
import { Link } from 'react-router-dom';
import windRose from "../../assets/navigation/windroos/windRoosSimple.svg";

function WheatherChoice() {
    return (
        <>
            <main>
                <h2>Weer keuze</h2>
                <p>Open-Meteo als API</p>
                <p>Haal grid op met radius ca 250mijl rond huidige locatie</p>
                <p>kies windrichting</p>
                <p>kies windkracht in m/2</p>
                <div className="basis">
                    <img
                        src={windRose}
                        alt='windroos'
                        style={{
                            transform: `rotate( 15deg)`,
                            transition: "transform 0.6s ease"
                        }}
                    />
                    <ul className="basis">
                        <li className="row-center"><h4>FORCE</h4></li>
                    </ul>
                </div>

                <button>zoek</button>
                <p>lijst met plaatsen met windrichting en windkracht</p>
            </main>

        </>
    );
}

export default WheatherChoice;