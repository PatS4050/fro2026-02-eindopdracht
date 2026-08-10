import React, {useContext} from 'react';
import NavBarPage from "../../components/navbar/NavBarPage.jsx";
import {useNavigate, Link, useLocation} from 'react-router-dom';
import { AuthContext } from "../../components/authenticate/AuthenticateContext.jsx";

function SignIn({location}) {
    // code Arthur
    // async function login() {
    //     try {
    //         const loginResponse = await axios.get(
    //             `https://novi-backend-api-wgsgz.ondigitalocean.app/api/login`,
    //             {
    //                 headers: {
    //                     "novi-education-project-id": "0aa01fc3-b0dd-4ad7-9f9e-82b0c9688601",
    //                 },
    //             },
    //             {
    //                 email: "test@novi.nl",
    //                 password: "test",
    //             },
    //         );
    //     } catch (error) {
    //         console.error("Er ging iets mis bij het inloggen", error);
    //     }
    // }
    const { isAuth, login, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const routerPage = useLocation();

    function handleLogin() {
        login();

        const destination = routerPage.state?.from?.pathname || "/";

        navigate(destination);
    }

    return (
        <>
            <NavBarPage location={location}/>
            <main>
                <h2>Login</h2>
                <p>switch login of registreren</p>
                <p>veld email</p>
                <p>veld wachtwoord</p>
                <p> forgot password? </p>
                <button type="button" onClick={handleLogin}>Sign In</button>

                {/*{isAuth ?*/}
                {/*<button*/}
                {/*    type="button"*/}
                {/*    onClick={() => navigate('/signin')}*/}
                {/*>*/}
                {/*    Log in*/}
                {/*</button>*/}
                {/*}*/}

                {/*bij registreren wordt id, naam en ww aangemaakt POST, registerForm*/}
                {/*bij login wordt gecontroleerd of je bestaat GET loginForm*/}
                {/*krijg je een token terug*/}
                {/*Token in local storage opslaan (onveilig) en isAuth = true*/}
                <h4>By continuing you agree to our Terms & Privacy Policy</h4>
                <p>uitloggen</p>
            </main>

        </>
    );
}

export default SignIn;