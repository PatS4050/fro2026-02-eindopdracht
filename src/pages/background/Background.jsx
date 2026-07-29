import React from 'react';
import './Background.css'
import { Link } from 'react-router-dom';

function Background() {
    return (
        <>
            <main>
                <h2>Achtergrond wijzigen</h2>
                <p>Upload een image</p>
                <p>6 voorbeeld plaatjes</p>
                <button>Apply als background</button>
            </main>
        </>
    );
}

export default Background;