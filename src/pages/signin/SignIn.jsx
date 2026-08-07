import React from 'react';
import { Link } from 'react-router-dom';
import NavBarPage from "../../components/navbar/NavBarPage.jsx";

function SignIn() {
    return (
        <>
            <NavBarPage location={location}/>
            <main>
                <h2>Login</h2>
                <p>switch login of registreren</p>
                <p>veld email</p>
                <p>veld wachtwoord</p>
                <p> fortgot password? </p>
                <button>Sign In</button>
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