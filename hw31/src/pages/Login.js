import {useNavigate, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import { login } from "../store/slices/userSlice";

export default function Login() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from || '/';

    const handleLogin = () => {
        dispatch(login())
        navigate(from, {replace: true});
    }

    return (
        <div>
            <h1>Login page</h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    )
}