import React from 'react'
import { Link } from 'react-router-dom'
// import ReactSwitch from 'react-switch'
import './Nav.scss'

function Nav() {
    return (
        <>
            <div id="header-wrapper">
                <header
                    id="header"
                    className="container"
                >
                    <div id="logo">
                        <h1>
                            <Link to="/">Decide</Link>
                        </h1>
                    </div>

                    <nav id="nav">
                        <ul>
                            <li className="current">
                                <Link to="/take-decision">Take decision</Link>
                            </li>

                            <li>
                                <Link to="/exemples">Examples</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Nav
