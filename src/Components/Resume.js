import React from 'react'
import '../Styles/About.css'
export default function Resume() {
    return (
        <>
            <div className="container-about">
                <header className="aboutme">
                    <h1><span className="txt-1">About</span><span className="txt-2">Me</span></h1>
                    <span className="about-text">I am a qualified and professional web developer with experience in
                        front-end as well as back-end development. Strong creative and
                        analytical skills. Team player with an eye for detail. I have skills in web designing, MERN Stack, PHP, jQuery, Python etc.</span>
                </header>
                <div className="about-img">
                    <img src={require('../Assets/about-img.png')} class="about-fluid" alt="" />
                </div>
            </div>
        </>
    )
}

