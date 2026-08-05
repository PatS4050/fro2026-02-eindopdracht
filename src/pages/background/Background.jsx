import React, {useState, useEffect} from 'react';
import './Background.css'
import bg1 from "../../assets/background/background-1.jpg"
import bg2 from "../../assets/background/background-2.jpg"
import bg3 from "../../assets/background/background-3.jpg"
import NavBarPage from "../../components/navbar/NavBarPage.jsx";


function Background({location}) {

    const [backgroundImage, setBackgroundImage] = useState(
        localStorage.getItem("backgroundImage") || ""
    );
    const [preview, setPreview] = useState("");
    const defaultBackgrounds = [bg1,bg2,bg3]
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
            <NavBarPage location={location} />
            <main className="content">
                <h2>Achtergrond wijzigen</h2>
                <p>Upload hier een image</p>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                />
                <div className="gallery">
                    {defaultBackgrounds.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Achtergrond ${index + 1}`}
                            onClick={() => changeBackground(image)}
                            style={{
                                width: "70px",
                                cursor: "pointer",
                                margin: "6px",
                                borderRadius: "6px",
                            }}
                        />
                    ))}
                </div>                {preview && (
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