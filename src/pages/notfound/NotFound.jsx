import './NotFound.css';
import {useNavigate} from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="not-found">
            <div className="not-found">
                <h1>404</h1>
                <h2>De pagina waar je naar zoekt bestaat niet</h2>
                <span>
                    <button type="button" onClick={() => navigate('/')}>Terug naar home</button>
                </span>
            </div>
        </section>
    );
}

export default NotFound;