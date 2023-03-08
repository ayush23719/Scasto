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
                <header className="logo"><Link style={{ color: 'inherit' }} to="/">Scasto</Link></header>
                <input type="checkbox" id="toggle" className={`input-toggler`} checked={checked} onChange={(e) => setChecked(e.target.checked)} onClick={setOverflow} />
                <label for="toggle" className="menu-toggler">
                    <span className="menu-toggler-line"></span>
                    <span className="menu-toggler-line"></span>
                    <span className="menu-toggler-line"></span>
                </label>

                <aside className={`sidebar `} >
                    <ul className="menu">
                        <li><Link className="menu-link" to="/" onClick={() => { handleNav(); handleOverflow(); }}>{props.home}</Link></li>

                        <li><Link className="menu-link" to="/projects" onClick={() => { handleNav(); handleOverflow(); }}>{props.projects}</Link></li>
                        <li><Link className="menu-link" to="/contact" onClick={() => { handleNav(); handleOverflow(); }}>{props.contact}</Link></li>
                        <li><a className="menu-link" href='https://www.drive.google.com/file/d/1r_ruHVWj3urN7FFZTVhujuNpXA2_MUh8/view?usp=sharing' onClick={() => { handleNav(); handleOverflow(); }}>Resume</a></li>
                    </ul>
                </aside>
            </div>
        </>
    )
}
