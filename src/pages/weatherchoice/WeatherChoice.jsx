import React, {useState, useRef} from 'react';
import axios from "axios";
import windRose from "../../assets/navigation/windroos/windRoosSimple.svg";
import NavBarPage from "../../components/navbar/NavBarPage.jsx";

function WheatherChoice({location}) {

    const [force, setForce] = useState(3)
    const [rotation, setRotation] = useState(0);
    const imageRef = useRef(null);
    const [weatherGrid, setWeatherGrid] = useState([]);
    const [error, setError] = useState(false)
    const [loading, toggleLoading] = useState(false);
    const [filteredMeteo, setFilteredMeteo] = useState([]);
    const [direction, setDirection] = useState("N");

    const rotateRose = (event) => {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = event.clientX - centerX;
        const y = event.clientY - centerY;
        let angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
        const index = Math.round(angle / 22.5) % 16;
        setRotation(index * 22.5);
        setDirection(windDirections[index]);
    };

    const getWeatherGrid = async () => {
        toggleLoading (true);
        setError (false);
        try {
            const radius = 5; // ongeveer 250 nautische mijl
            // const step = 0.5;  // grid afstand in graden
            const step = 1;  // grid afstand in graden
            const points = [];

            for (
                let lat = location.latitude - radius;
                lat <= location.latitude + radius;
                lat += step
            ) {
                for (
                    let lon = location.longitude - radius;
                    lon <= location.longitude + radius;
                    lon += step
                ) {
                    points.push({
                        latitude: Number(lat.toFixed(2)),
                        longitude: Number(lon.toFixed(2))
                    });
                }
            }
    const requests = points.map((point) =>
        axios.get("https://api.open-meteo.com/v1/forecast", {
            params: {
                latitude: point.latitude,
                longitude: point.longitude,
                current: "wind_speed_10m,wind_direction_10m"
            }
        })
    );
    const responses = await Promise.all(requests);
    const result = responses.map((response, index) => ({
        latitude: points[index].latitude,
        longitude: points[index].longitude,
        windSpeed: response.data.current.wind_speed_10m,
        windDirection: response.data.current.wind_direction_10m
    }));

    setWeatherGrid(result);
    console.log("volledig grid",result);
    return result;

} catch (error) {
    console.error("Fout bij ophalen weergegevens:", error);

} finally {
    toggleLoading(false);
}};

    const bftToMs = {
        0: [0, 0.2],
        1: [0.3, 1.5],
        2: [1.6, 3.3],
        3: [3.4, 5.4],
        4: [5.5, 7.9],
        5: [8.0, 10.7],
        6: [10.8, 13.8],
        7: [13.9, 17.1],
        8: [17.2, 20.7],
        9: [20.8, 24.4],
        10: [24.5, 28.4],
        11: [28.5, 32.6],
        12: [32.7, 50]
    };

    const windDirections = [
        "N",
        "NNO",
        "NO",
        "ONO",
        "O",
        "OZO",
        "ZO",
        "ZZO",
        "Z",
        "ZZW",
        "ZW",
        "WZW",
        "W",
        "WNW",
        "NW",
        "NNW"
    ];

    function degreesToDirection(degrees) {
        const index = Math.round(degrees / 22.5) % 16;
        return windDirections[index];
    }
    // const filterWeatherGrid = () => {
    //     const [minSpeed, maxSpeed] = bftToMs[force];
    //
    //     const filtered = weatherGrid.filter((point) => {
    //         const pointDirection = degreesToDirection(point.windDirection);
    //
    //         return (
    //             point.windSpeed >= minSpeed &&
    //             point.windSpeed <= maxSpeed &&
    //             pointDirection === direction
    //         );
    //     });
    //
    //     console.log("Gefilterde plaatsen:", filtered);
    //
    //     return filtered;
    // };

    const filtered = weatherGrid.filter(point =>
        degreesToDirection(point.windDirection) === direction
    );

    const searchWeather = async () => {
        const grid = await getWeatherGrid();
        const [minSpeed, maxSpeed] = bftToMs[force];
        const filtered = grid.filter((point) => {
            return (
                point.windSpeed >= minSpeed &&
                point.windSpeed <= maxSpeed &&
                degreesToDirection(point.windDirection) === direction
            );
        });
        setFilteredMeteo(filtered);
        console.log("gefilterde plaatsen", filtered);
    };



    return (
        <>
            <NavBarPage location={location} />
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

                <button onClick={searchWeather}
                    disabled={loading}
                    >
                    {loading ? "Ophalen..." : "Zoek"}</button>
                <p>lijst met plaatsen met windrichting en windkracht</p>
            </main>

        </>
    );
}

export default WheatherChoice;