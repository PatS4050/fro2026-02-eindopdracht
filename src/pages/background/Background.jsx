import React from 'react';
import './Background.css'
import { Link } from 'react-router-dom';

function Background() {

    const handleUpload = (e) => {
        const file = e.target.files[0];
        onUpload(file);
    };

    return (
        <>
            <main className="content">
                <h2>Achtergrond wijzigen</h2>
                <p>Upload hier een image</p>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                />
                <p>6 voorbeeld plaatjes</p>
                <button>Apply als background</button>
            </main>
        </>
    );
}

export default Background;