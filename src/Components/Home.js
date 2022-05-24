import React from 'react'
import '../Styles/Home.css'
export default function Home() {
    return (
        <>
            <div className="container">
                <header className="body-text">
                    <span className="greetings">
                        Hello,
                    </span>
                    <span className="name-text">
                        I'm Ayush Pratap Singh
                    </span>
                    <span className="field">
                        Web Developer
                    </span>
                    <img src={require('../Assets/home-icon.png')} class="img-fluid" alt="" />
                </header>

            </div>
        </>
    )
}

