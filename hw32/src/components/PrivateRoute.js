import { Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

export default function PrivateRoute( { children } ) {
    const isAuthenticated = useSelector(state => state.user.isLogin);
    const location = useLocation();

    return isAuthenticated ? children : <Navigate to="/login" replace state={{ from: location.pathname }} />;
}