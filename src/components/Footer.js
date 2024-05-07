import React from "react";

export function Footer() {

    return (
        <footer className="home">
            <div className="footer-logo-container">
                <img src="img/Logo.png" alt="Color Aura logo" class="footer-logo" />
            </div>
            <div className="contact">
                <div className="contact-center">
                    <ul>
                        <li className="footer-text text-contact"><span
                            className="material-icons footer-icons">email</span>coloranalysis@coloraura.com</li>
                        <li className="footer-text text-contact"><span
                            className="material-icons footer-icons">phone</span>123-456-7890
                        </li>
                        <li className="footer-text text-contact">&copy; ColorAura 2024</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}