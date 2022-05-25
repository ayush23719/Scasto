import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
export default function Navbar(props) {
    const [checked, setChecked] = useState(false);
    const handleNav = () => {
        if (checked === true) {
            setChecked(false);
        }
    }
    return (
        <>
            <header className="logo">Scasto</header>
            <input type="checkbox" id="toggle" className={`input-toggler`} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            <label for="toggle" className="menu-toggler">
                <span className="menu-toggler-line"></span>
                <span className="menu-toggler-line"></span>
                <span className="menu-toggler-line"></span>
            </label>
            <aside className={`sidebar `}>
                <ul className="menu">
                    <li><Link className="menu-link" to="/" onClick={handleNav}>{props.home}</Link></li>
                    <li><Link className="menu-link" to="/about" onClick={handleNav}>{props.about}</Link></li>
                    <li><Link className="menu-link" to="/projects" onClick={handleNav}>{props.projects}</Link></li>
                    <li><Link className="menu-link" to="/contact" onClick={handleNav}>{props.contact}</Link></li>
                </ul>
            </aside>
        </>
    )
}
