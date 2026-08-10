import React, {useContext, useState} from 'react';
import NavBarPage from "../../components/navbar/NavBarPage.jsx";
import {useNavigate, Link, useLocation} from 'react-router-dom';
import { AuthContext } from "../../components/authenticate/AuthenticateContext.jsx";

function SignIn({location}) {

    const { isAuth, login, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const routerPage = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [error, toggleError] = useState(false)
    const linkNoviBackEnd = "https://novi-backend-api-wgsgz.ondigitalocean.app/"
    //'novi-education-project-id': 'c28ee213-3929-411e-8859-3b773da0246e'



    function handleLogin(event) {
        event.preventDefault();

        if (isLogin) {
            login(email, password);
            const destination = routerPage.state?.from?.pathname || "/";
            navigate(destination);
            console.log("Inloggen", email, password);
        } else {
            console.log("registreren", email, password)
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


                {/*bij registreren wordt id, naam en ww aangemaakt POST, registerForm*/}
                {/*bij login wordt gecontroleerd of je bestaat GET loginForm*/}
                {/*krijg je een token terug*/}
                {/*Token in local storage opslaan (onveilig) en isAuth = true*/}
                <h4>By continuing you agree to our Terms & Privacy Policy</h4>
                <button className='signout-button' type="button" onClick={logout}>
                    Log out
                </button>
            </main>
        </>
    );
}

export default SignIn;