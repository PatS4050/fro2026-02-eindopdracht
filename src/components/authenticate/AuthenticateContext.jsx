
import {createContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"



export const AuthContext = createContext({});

function AuthContextProvider( {children} ) {

    const [isAuth, toggleIsAuth] = useState(false);
    const [token, SetToken] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();
    const linkNoviLogin = "https://novi-backend-api-wgsgz.ondigitalocean.app/api/login"
    const linkNoviRegister = "https://novi-backend-api-wgsgz.ondigitalocean.app/api/users"
    const PROJECT_ID = import.meta.env.VITE_NOVI_PROJECT_ID;

async function login(email, password) {

    try {
        const loginResponse = await axios.post(
            linkNoviLogin,
            {
                email: email,
                password: password,
        },
            {
                headers: {
                    "novi-education-project-id": PROJECT_ID
                },
            }
        );
        const token = loginResponse.data.token;
        localStorage.setItem("token", token);
        SetToken(token);
        toggleIsAuth(true);
        return true;

    } catch (error) {
        console.error("Er ging iets mis bij het inloggen", error);
    }
}

    async function register(email, password) {

        try {
            const registerResponse = await axios.post(
                linkNoviRegister,
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        "novi-education-project-id": PROJECT_ID
                    },
                }
            );
            toggleIsAuth(true)

        } catch (error) {
            console.error("Er ging iets mis bij het registreren", error);
        }
    }

    function logout() {
        localStorage.removeItem("token");
        SetToken(null);
        toggleIsAuth(false);
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{isAuth, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;