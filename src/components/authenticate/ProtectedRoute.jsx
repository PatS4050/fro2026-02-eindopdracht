import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthenticateContext.jsx";

function ProtectedRoute({ children }) {
    const { isAuth } = useContext(AuthContext);
    const page = useLocation();

    if (!isAuth) {
        return <Navigate
            to="/signin"
            state={{from: page }}

        />;
    }

    return children;
}

export default ProtectedRoute;