import React from 'react'
import '../Styles/Home.css'
export default function Home() {
    return (
        <>
            <div className="container-home">
                <header className="body-text" >
                    <span className="greetings">
                        Hello,
                    </span>
                    <span className="name-text">
                        I'm Ayush Pratap Singh
                    </span>
                    <span className="field">
                        Web Developer
                    </span>

                </header>
                <div className="img-body">
                    <img src={require('../Assets/home-icon.png')} class="img-fluid" alt="" />
                </div>
            </div>
            <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(114,137,218,0.7)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(114,137,218,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(114,137,218,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#7289da" />
                    </g>
                </svg>
            </div>

            <footer class="page-footer  unique-color-dark pt-1">
                <div class="container">
                    <ul class="list-unstyled list-inline text-center py-2">
                        <h5>© 2022 Copyright: Scasto</h5>
                        {/* <li class="list-inline-item">
                            <a href="#" class="btn btn-outline-light btn-rounded">yes!</a>
                        </li><br />
                        <br /> */}
                    </ul>
                </div>
                {/* <div class="footer-copyright text-center py-3"><h7>© 2020 Copyright:</h7>
                    <h7 href="https://discord.gg/uRqH5UT"> Croxy</h7>
                </div> */}
            </footer>
        </>
    )
}

