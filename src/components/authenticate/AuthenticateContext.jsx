
import {createContext} from "react";

export const AuthContext = createContext({});

function AuthContextProvider( {children} ) {
    const tomaat = {
        isAuth: false,
    }
    return (
        <AuthContext.Provider value={tomaat}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;