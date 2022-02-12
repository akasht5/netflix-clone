import React from 'react'

import './Footer.styles.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <span className="call-center">
                    Questions? Call 000-800-040-1843
                </span>
                <div className="links">
                    <ul>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                    <ul>
                        <li>Account</li>
                        <li>Ways to Watch</li>
                        <li>Corporate Information</li>
                        <li>Only on Netflix</li>
                    </ul>
                    <ul>
                        <li>Media Center</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <span className="country">Netflix India</span>
            </div>
        </div>
    )
}

export default Footer
