import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import windRose from "../../assets/navigation/windroos/windRoosSimple.svg";

function WheatherChoice() {

    const [force, setForce] = useState(3)

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
                        <li className="row-center">
                            <input
                                type="range"
                                min="0"
                                max="12"
                                step="1"
                                value={force}
                                onChange={(e) => setForce(Number(e.target.value))}
                            />
                        </li>

                        <li className="row-center">
                            <strong>{force} Bft</strong>
                        </li>
                    </ul>
                </div>

                <button>zoek</button>
                <p>lijst met plaatsen met windrichting en windkracht</p>
            </main>

        </>
    );
}

export default WheatherChoice;