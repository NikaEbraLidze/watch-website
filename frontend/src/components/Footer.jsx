import React, { useState, useEffect } from "react";
import "../assets/style/style.css";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="footer-container">
                        <h2><Link to="/watches#welcome-catalog">Watches</Link></h2>
                        <ul>
                            <li><span><Link to="/watches#filter">Classic</Link></span></li>
                            <li><span><Link to="/watches#filter">Sports</Link></span></li>
                            <li><span><Link to="/watches#filter">Smartwatches</Link></span></li>
                            <li><span><Link to="/watches#filter">Automatic</Link></span></li>
                            <li><span><Link to="/watches#filter">Quartz</Link></span></li>
                            <li><span><Link to="/watches#filter">Luxury</Link></span></li>
                        </ul>
                    </div>

                    <div className="footer-container">
                    <h2><Link to="/aboutus#heading">Company</Link></h2>
                    <ul>
                        <li><span><Link to="/aboutus#history">History</Link></span></li>
                        <li><span><Link to="/aboutus#mission">Mission & Vision</Link></span></li>
                        <li><span><Link to="/aboutus#vision">Optional</Link></span></li>
                        <li><span><Link to="/aboutus#why">Why Choose Us</Link></span></li>
                    </ul>
                    </div>

                    <div className="footer-container">
                    <h2><Link to="/contact#heading">Contact us</Link></h2>
                    <ul>
                        <li><span><Link to="/contact#contact">Contact</Link></span></li>
                        <li><span><Link to="/contact#contact">Address</Link></span></li>
                    </ul>
                    </div>

                    <div className="footer-container">
                    <h2>Visit us on</h2>
                    <ul>
                        <li><span>facebook</span></li>
                        <li><span>youtube</span></li>
                        <li><span>instagram</span></li>
                        <li><span>X</span></li>
                    </ul>
                    </div>
                </div>

                <p className="copyright">© NEwatch 2025</p>
            </footer>
        </>
    );
};