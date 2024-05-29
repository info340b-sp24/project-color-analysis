import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div>
                    <Link to=".."><img src="img/Logo.png" alt="Color Aura logo" class="logo" /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link margin-link" aria-current="page" to="../quiz">Quiz</Link>
                        <Link className="nav-link margin-link" to="../products">Products</Link>
                        <Link className="nav-link margin-link upload-link" to="../upload">Upload</Link>
                        <Link className="nav-link" to="../profile"><span
                            class="material-icons profile">person</span>Profile</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
