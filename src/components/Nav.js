import React from "react";

export function Nav() {
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
