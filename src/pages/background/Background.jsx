import React, {useState, useEffect} from 'react';
import './Background.css'
import { Link } from 'react-router-dom';

function Background() {

    const [backgroundImage, setBackgroundImage] = useState(
        localStorage.getItem("backgroundImage") || ""
    );
    const [preview, setPreview] = useState("");

    const changeBackground = (image) => {
        setBackgroundImage(image);
        localStorage.setItem("backgroundImage", image);
        document.body.style.backgroundImage = `url(${image})`;
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            setPreview(reader.result);
        };

        reader.readAsDataURL(file);
    };

    useEffect(() => {
        const image = localStorage.getItem("backgroundImage");

        if (image) {
            document.body.style.backgroundImage = `url(${image})`;
        }
    }, []);


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
                {preview && (
                    <img
                        src={preview}
                        alt="Preview"
                        style={{
                            width: "200px",
                            marginTop: "20px",
                        }}
                    />
                )}
                <button onClick={() => changeBackground(preview)}>
                    Gebruik als achtergrond
                </button>
            </main>
        </>
    );
}

export default Background;