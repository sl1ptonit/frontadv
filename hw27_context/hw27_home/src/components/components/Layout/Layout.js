import {NavLink, Outlet} from "react-router-dom";
import './Layout.css';
import {ThemeContext} from "../../../context/ThemeContext";
import {useContext} from "react";

export default function Layout() {

    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div className='container'>
            <div className={`header-${theme}`}>
                <NavLink className={`header-link-${theme}`} to="/">Home</NavLink>
                <NavLink className={`header-link-${theme}`} to="/contacts">Contacts</NavLink>
                <NavLink className={`header-link-${theme}`} to="/about">About</NavLink>
                <button onClick={toggleTheme}>Change theme</button>
            </div>

            <Outlet />
        </div>
    )
}