import {NavLink, Outlet} from "react-router-dom";
import './Layout.scss';
import {ThemeContext} from "../../../context/ThemeContext";
import {useContext} from "react";

export default function Layout() {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className='container'>
            <div className={`header-${theme}`}>
                <NavLink className={`header-link-${theme}`} to="/">Home</NavLink>
                <NavLink className={`header-link-${theme}`} to="/todos">Todo</NavLink>
                <NavLink className={`header-link-${theme}`} to="/posts">Posts</NavLink>
                <NavLink className={`header-link-${theme}`} to="/profile">Profile</NavLink>
                <button onClick={toggleTheme}>Change theme</button>
            </div>
            <Outlet />
        </div>
    )
}