
import {createContext, useState} from "react";
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext({});

function AuthContextProvider( {children} ) {
//     const tomaat = {
//         isAuth: false,
//     }
//     return (
//         <AuthContext.Provider value={tomaat}>
//             {children}
//         </AuthContext.Provider>
//     )
// }
    const [isAuth, toggleIsAuth] = useState(false);
    const navigate = useNavigate();

    function login() {
        console.log('Gebruiker is ingelogd!');
        toggleIsAuth(true);
        navigate('/background');
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