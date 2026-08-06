import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import windRose from "../../assets/navigation/windroos/windRoosSimple.svg";

function WheatherChoice() {

    const [force, setForce] = useState(3)
    const [rotation, setRotation] = useState(0);
    const imageRef = useRef(null);
    const rotateRose = (event) => {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = event.clientX - centerX;
        const y = event.clientY - centerY;
        const angle = Math.atan2(y, x) * (180 / Math.PI) + 90;

        setRotation(angle);
    };

    return (
        <>
            <main>
                <h2>Weer keuze</h2>
                <p>Open-Meteo als API</p>
                <p>Haal grid op met radius ca 250mijl rond huidige locatie</p>
                <h4>kies windrichting</h4>
                <div className="basis">
                    <img
                        ref={imageRef}
                        src={windRose}
                        alt="windroos"
                        onClick={rotateRose}
                        style={{
                            width: "250px",
                            cursor: "grab",
                            transform: `rotate(${rotation}deg)`,
                            transition: "transform 0.2s ease",
                        }}
                    />
                    <ul className="basis">
                        <li className="row-center"><h4>Kies windkracht</h4></li>
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