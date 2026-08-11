import React, {useContext, useState} from 'react';
import NavBarPage from "../../components/navbar/NavBarPage.jsx";
import {useNavigate, Link, useLocation} from 'react-router-dom';
import { AuthContext } from "../../components/authenticate/AuthenticateContext.jsx";
import axios from "axios";

function SignIn({location}) {

    const { isAuth, login, logout, register } = useContext(AuthContext);
    const navigate = useNavigate();
    const routerPage = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [error, toggleError] = useState(false);


    async function handleLogin(event) {
        event.preventDefault();

        if (isLogin) {
            const goodLogin = await login(email, password);
            if (goodLogin) {
            const destination = routerPage.state?.from?.pathname || "/";
            navigate(destination);
            }
        } else {
            register(email, password);
            const destination = routerPage.state?.from?.pathname || "/";
            navigate(destination);
        }
    }

    return (
        <>
            <NavBarPage location={location}/>
            <main>
                <h2>Login</h2>
                <div className="auth-switch">
                    <button
                        type="button"
                        className={`switch-button ${isLogin ? "login" : "register"}`}
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        <span className="switch-option login-option">Login</span>
                        <span className="switch-option register-option">Registreren</span>
                        <span className="switch-circle"></span>
                    </button>
                </div>
                <form className="basis" onSubmit={handleLogin}>
                <input className='signin'
                        id="email"
                       type="email"
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                       placeholder="Vul je email in" />
                <input className='signin'
                    id="password"
                       type="password"
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
                       placeholder="Vul je wachtwoord in" />
                <button className='signin-button' type="submit">Sign In</button>
                </form>
                <h4>By continuing you agree to our Terms & Privacy Policy</h4>
                <button className='signout-button' type="button" onClick={logout}>
                    Log out
                </button>
            </main>
        </>
    );
}

export default SignIn;