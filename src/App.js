import { createContext, useState } from 'react'

import Home from './pages/Home'
import Nav from './components/Nav/Nav'

// import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TakeDecision from './pages/takeDecision'
import Examples from './pages/Examples'
import About from './pages/about'
import Footer from './components/Footer/Footer'

import ReactSwitch from 'react-switch'

import './App.scss'

export const ThemeContext = createContext(null)

const App = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((current) => (current === 'light' ? 'dark' : 'light'))
    }
    return (
        <Router>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div
                    className="container"
                    id={theme}
                >
                    <Nav />
                    <div className="switch">
                        <ReactSwitch
                            onChange={toggleTheme}
                            checked={theme === 'dark'}
                        />
                        <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
                    </div>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/take-decision"
                            element={<TakeDecision />}
                        />
                        <Route
                            path="/exemples"
                            element={<Examples />}
                        />
                        <Route
                            path="/about"
                            element={<About />}
                        />
                    </Routes>
                    <Footer />
                </div>
            </ThemeContext.Provider>
        </Router>
    )
}

export default App
