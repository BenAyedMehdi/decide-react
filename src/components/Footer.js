import React from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function Footer() {
  return (
    <div>
        <div id="footer-wrapper">
            <footer id="    " className="container">
                <div className="row">
                    
                    <div className="col-6 col-6-medium col-12-small">
                        <div className="App">
                            <section className="widget links">
                                <h3>Decide</h3>
                                <ul className="style2">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/take-decision">Take a decision</Link></li>
                                    <li><Link to="/exemples">See Exemples</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                   
                    <div className="col-6 col-6-medium col-12-small">
                        <div className='App'>
                            <section className="widget contact last">
                                <h3>Contact Us</h3>
                            
                                <ul>
                                    <li><a href="https://github.com/BenAyedMehdi" className="icon brands fa-github"><span className="label">Github</span></a></li>
                                    <li><a href="https://www.facebook.com/happy.mahdi/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                                    <li><a href="https://www.facebook.com/happy.mahdi/" className="icon brands fa-youtube-f"><span className="label">Youtube</span></a></li>
                                    <li><a href="https://www.linkedin.com/in/ben-ayed-mehdi/" className="icon brands fa-linkedin"><span className="label">Instagram</span></a></li>
                                    <li><a href="https://mehdibenayed.netlify.app/" class="icon brands fa-dribbble"><span class="label">Website</span></a></li>
                                </ul>
                                <p>mr.mehdi.ben.ayed@gmail.com<br />
                                Budapest, Hungary<br /></p>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <div id="copyright">
                            <ul className="menu">
                                <li>&copy; Untitled. All rights reserved</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    </div>
  )
}

export default Footer