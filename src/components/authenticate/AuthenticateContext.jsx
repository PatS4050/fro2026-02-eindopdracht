
import {createContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"



export const AuthContext = createContext({});

function AuthContextProvider( {children} ) {

    const [isAuth, toggleIsAuth] = useState(false);
    const [token, SetToken] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();
    const linkNoviBackEnd = "https://novi-backend-api-wgsgz.ondigitalocean.app/"
    const PROJECT_ID = import.meta.env.VITE_NOVI_PROJECT_ID;
    // const isAuth = Boolean(token)



    function login() {
        console.log('Gebruiker is ingelogd!');
        toggleIsAuth(true);
    }

    // code Arthur
async function login() {
    try {
        const loginResponse = await axios.post(
            linkNoviBackEnd,
            {
                email: "test@novi.nl",
                password: "test",
        },
            {
                headers: {
                    "novi-education-project-id": PROJECT_ID
                },
            }
        );
    } catch (error) {
        console.error("Er ging iets mis bij het inloggen", error);
    }
}

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        toggleIsAuth(false);
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;