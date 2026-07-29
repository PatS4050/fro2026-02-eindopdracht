import React from 'react';
import { Link } from 'react-router-dom';

function WheatherChoice() {
    return (
        <>
            <main>
                <h2>Weer keuze</h2>
                <p>Open-Meteo als API</p>
                <p>Haal grid op met radius ca 250mijl rond huidige locatie</p>
                <p>kies windrichting</p>
                <p>kies windkracht in m/2</p>
                <button>zoek</button>
                <p>lijst met plaatsen met windrichting en windkracht</p>
            </main>

        </>
    );
}

export default WheatherChoice;