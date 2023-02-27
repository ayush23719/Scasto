import React from 'react'
import '../Styles/Projects.css'
import { Link } from "react-router-dom";
export default function Projects() {

    return (
        <>
            <div class="main" >
                <h1>My<span className="yellow">Projects</span></h1>
                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/sustainable.jpg')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">Sustainable</h2>
                                <p class="card_text">A knowledge website for the indigenous communities around the world. </p>
                                <a href='https://www.github.com/ayush23719/Sustainable-HackerEarth' style={{ color: 'inherit' }}><button class="btn card_btn">Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/kaizen.jpg')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">KaiZen</h2>
                                <p class="card_text">A web based app aimed towards helping people improve their mental health.</p>
                                <a href='https://www.github.com/ayush23719/kaizen' style={{ color: 'inherit' }}><button class="btn card_btn">Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/soundnode.jpg')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">Soundnode</h2>
                                <p class="card_text">Angular based music web app. Listen to your music online. (built using SoundCloud API)</p>
                                <a href='https://www.github.com/ayush23719/soundnode' style={{ color: 'inherit' }}><button class="btn card_btn">Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/textutils.jpg')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">TextUtils</h2>
                                <p class="card_text">A REACT based web app which can be handy for tasks like text-to-speech, count words etc.</p>
                                <a href='https://www.github.com/ayush23719/my-app' style={{ color: 'inherit' }}><button class="btn card_btn">Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/heartbeat.jpg')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">Heartbeat</h2>
                                <p class="card_text">An online music storage and searching website. Search for music online and store them!</p>
                                <a href='https://www.github.com/ayush23719/heartbeat' style={{ color: 'inherit' }}><button class="btn card_btn">Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/newsmonkey.png')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">NewsMonkey</h2>
                                <p class="card_text">A news website which shows latest headlines around the world. (built using NewsAPI)</p>
                                <a href='https://www.github.com/ayush23719/news-app' style={{ color: 'inherit' }}><button class="btn card_btn">Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/BusKaro.png')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">BusKaro</h2>
                                <p class="card_text">An app which tracks the location, route, timing and seat occupancy of a local buses.</p>
                                <a href='https://www.github.com/prajeshElEvEn/buskaro' style={{ color: 'inherit' }}><button class="btn card_btn">Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/DormDeals.png')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">DormDeals</h2>
                                <p class="card_text">Sell your old hostel stuff with this app. Just post the picture, description and contact details.</p>
                                <a href='https://www.github.com/ayush23719/DormDeals' style={{ color: 'inherit' }}><button class="btn card_btn">Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/Confab.png')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">Confab</h2>
                                <p class="card_text">Create a chat room and start chatting! Share the link with others for them to join.</p>
                                <a href='https://www.github.com/ayush23719/Confab' style={{ color: 'inherit' }}><button class="btn card_btn">Read More</button></a>
                            </div>
                        </div>
                    </li>
                </ul>
                <footer className="footer-projects">
                    <p className="end-text">Made with  ❤️  By Ayush</p>
                </footer>
            </div>

        </>
    )
}
