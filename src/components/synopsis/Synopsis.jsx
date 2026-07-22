import React from 'react';
import './Synopsis.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <ul className="basis">
                <li><p> TEMP | PRESSURE</p></li>
                <li><p> Image weathertype</p></li>
                <li><p> Winddirection visual</p></li>
                <li><p> Direction | kracht</p></li>
                <li><h6>Omschrijving wind </h6></li>
            </ul>
        </div>
    );
}

export default Home;