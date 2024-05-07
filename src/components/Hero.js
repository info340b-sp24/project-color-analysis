import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div>
                    <a href="index.html"><img src="img/Logo.png" alt="Color Aura logo" class="logo" /></a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link margin-link" aria-current="page" href="quiz-landing.html">Quiz</a>
                        <a className="nav-link margin-link" href="products.html">Products</a>
                        <a className="nav-link margin-link upload-link" href="upload.html">Upload</a>
                        <a className="nav-link" href="profile.html"><span
                            class="material-icons profile">person</span>Profile</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function HeroContent() {
    return (
        <div className="flex">
            <div className="col hero-text">
                <div className="title-hero-text">
                    <h1>Get your <strong>color</strong><span class="block"><strong>analysis</strong> today</span>
                    </h1>
                </div>
                <div className="body-hero-text">
                    <p>Interested in figuring out what colors best suit your features?
                        Take the quiz to see your perfect color palette and the
                        products that go along with it.</p>
                </div>
                <div className="quiz-hero-button">
                    <a href="quiz-landing.html"><button class="quiz-button" aria-label="take quiz"><strong
                        className="button-text">Take
                        quiz</strong><span className="material-icons arrow">north_east</span></button></a>
                </div>
            </div>
            <div className="col">
                <img src="img/hero.png" className="hero-img"
                    alt="smiling woman on a brown background with pink tear drop and circle decorations" />
            </div>
        </div>
    )
}

export function Hero() {
    return (
        <div className='home'>
            <header>
                <Nav />
                <HeroContent />
            </header>
        </div>
    )
}