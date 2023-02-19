import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
export default function Navbar(props) {
    const [checked, setChecked] = useState(false);
    const setOverflow = () => {
        if (checked === false) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }
    const handleOverflow = () => {

        document.body.style.overflow = 'auto';
    }


    const handleNav = () => {
        if (checked === true) {
            setChecked(false);
        }
    }

    return (
        <>
            <div className="container-navbar">
                <header className="logo">Scasto</header>
                <input type="checkbox" id="toggle" className={`input-toggler`} checked={checked} onChange={(e) => setChecked(e.target.checked)} onClick={setOverflow} />
                <label for="toggle" className="menu-toggler">
                    <span className="menu-toggler-line"></span>
                    <span className="menu-toggler-line"></span>
                    <span className="menu-toggler-line"></span>
                </label>

                <aside className={`sidebar `} >
                    <ul className="menu">
                        <li><Link className="menu-link" to="/Scasto" onClick={() => { handleNav(); handleOverflow(); }}>{props.home}</Link></li>

                        <li><Link className="menu-link" to="/Scasto/projects" onClick={() => { handleNav(); handleOverflow(); }}>{props.projects}</Link></li>
                        <li><Link className="menu-link" to="/Scasto/contact" onClick={() => { handleNav(); handleOverflow(); }}>{props.contact}</Link></li>
                        <li><Link className="menu-link" to="/Scasto/about" onClick={() => { handleNav(); handleOverflow(); }}>{props.resume}</Link></li>
                    </ul>
                </aside>
            </div>
        </>
    )
}
