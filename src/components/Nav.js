import React from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function Nav() {
  return (
    <div>
        <div id="header-wrapper">
            <header id="header" className="container">

                    <div id="logo">
                        <h1><Link to="/">Decide</Link></h1>
                    </div>

                    <nav id="nav">
                        <ul>
                            <li className="current"><Link to="/take-decision">Take decision</Link></li>
                            
                            <li><Link to="/exemples">Exemples</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>

            </header>
        </div>
    </div>
  )
}

export default Nav