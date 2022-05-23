import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
export default function Navbar(props) {
    return (
        <>


            <header className="logo">Scasto</header>
            <div className="container-fluid">
                <img src="./Assets/home-icon.png" alt="" className="img-fluid mb-5" />
            </div>
            <input type="checkbox" id="toggle" className="input-toggler" />
            <label for="toggle" className="menu-toggler">
                <span className="menu-toggler-line"></span>
                <span className="menu-toggler-line"></span>
                <span className="menu-toggler-line"></span>
            </label>
            <aside className="sidebar">
                <ul className="menu">
                    <li><Link className="menu-link" to="/">{props.home}</Link></li>
                    <li><Link className="menu-link" to="/about">{props.about}</Link></li>
                    <li><Link className="menu-link" to="/projects">{props.projects}</Link></li>
                    <li><Link className="menu-link" to="/contact">{props.contact}</Link></li>
                </ul>
            </aside>
        </>
    )
}
