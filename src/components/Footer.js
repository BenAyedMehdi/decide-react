import React from 'react'

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
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Take a decision</a></li>
                                    <li><a href="#">See exemples</a></li>
                                    <li><a href="#">About</a></li>
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
                                    <li><a href="https://www.linkedin.com/in/mehdi-ben-ayed-hungary/" className="icon brands fa-linkedin"><span className="label">Instagram</span></a></li>
                                </ul>
                                <p>foosheeka@gmail.com<br />
                                Budapest, Hungary<br /></p>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
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