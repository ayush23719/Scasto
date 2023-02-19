import React from 'react'
import '../Styles/Home.css'
import Background from './Background';
import { ReactComponent as MySVG } from '../Assets/home-icon.svg';

export default function Home() {
    return (
        <><Background />
            <div className="container-home">

                <header className="body-text" >
                    <span className="greetings">
                        Hello,
                    </span>
                    <span className="name-text">
                        I'm Ayush Pratap Singh
                    </span>
                    <p className="about">
                        Welcome to my website, <span className="website-name">
                            Scasto!
                        </span>
                        I am a Web and Mobile app developer with a passion for learning new technologies.
                        I have a keen interest in problem solving and am excited to apply my skills and knowledge and
                        contribute to a team where I can make an impact.


                    </p>

                </header>
                <div className="img-container">
                    <MySVG className="img-fluid" />
                </div>

            </div>
            <footer className="footer-home">
                <p className="end-text">Made with  ❤️  By Ayush</p>
            </footer>
        </>
    )
}

