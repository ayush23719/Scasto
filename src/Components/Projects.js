import React from 'react'
import '../Styles/Project.css'

export default function Projects() {
    return (
        <>
            <div class="main">
                <h1>My<span className="yellow">Projects</span></h1>
                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/sustainable.jpg')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">Sustainable</h2>
                                <p class="card_text">A knowledge website for the indigenous communities around the world. </p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/kaizen.jpg')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">KaiZen</h2>
                                <p class="card_text">A web based app aimed towards helping people improve their mental health.</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/soundnode.jpg')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">Soundnode</h2>
                                <p class="card_text">Angular based music web app. Listen to your music online. (built using SoundCloud API)</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/textutils.jpg')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">TextUtils</h2>
                                <p class="card_text">A REACT based web app which can be handy for tasks like text-to-speech, count words etc.</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/heartbeat.jpg')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">Heartbeat</h2>
                                <p class="card_text">An online music storage and searching website. Search for music online and store them!</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={require('../Assets/newsmonkey.png')} /></div>
                            <div class="card_content">
                                <h2 class="card_title">NewsMonkey</h2>
                                <p class="card_text">A news website which shows latest headlines around the world. (built using NewsAPI)</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    )
}
