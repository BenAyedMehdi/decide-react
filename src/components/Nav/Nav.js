import { React, useState } from 'react'
import { Link } from 'react-router-dom'
// import ReactSwitch from 'react-switch'
import './Nav.scss'

function Nav() {
    // const [theme, setTheme] = useState('dark')

    // const toggleTheme = () => {
    //     setTheme((current) => (current === 'light' ? 'dark' : 'light'))
    // }
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
                        {/* <div className="switch">
                            <ReactSwitch
                                onChange={toggleTheme}
                                checked={theme === 'dark'}
                            />
                            <label>
                                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                            </label>
                        </div> */}
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Nav
