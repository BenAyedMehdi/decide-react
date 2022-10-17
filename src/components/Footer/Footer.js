import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'

import './Footer.scss'

function Footer() {
    return (
        <footer className="container">
            <div className="links-and-social">
                <section className="links__section">
                    <h3>Decide</h3>
                    <ul className="style2">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/take-decision">Take a decision</Link>
                        </li>
                        <li>
                            <Link to="/exemples">Examples</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </section>
                <br />

                <section className="social__section">
                    <h3>Contact Us</h3>

                    <ul className="social-media_list">
                        <li className="social">
                            <a href="https://github.com/BenAyedMehdi">
                                <GitHubIcon className="social-media__icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/happy.mahdi/">
                                <FacebookIcon className="social-media__icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mehdi-ben-ayed-hungary/">
                                <LinkedInIcon className="social-media__icon" />
                            </a>
                        </li>
                    </ul>
                    <p>
                        foosheeka@gmail.com
                        <br />
                        Budapest, Hungary
                        <br />
                    </p>
                </section>
            </div>
            <div>
                <div>
                    <div id="copyright">
                        <ul className="menu">
                            <li>&copy; Untitled. All rights reserved</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
