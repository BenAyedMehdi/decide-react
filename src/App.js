import Home from './pages/home'
import Nav from './components/Nav/Nav'

// import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TakeDecision from './pages/takeDecision'

import Exemples from './pages/exemples'
import About from './pages/about'

import Footer from './components/Footer/Footer'

import './App.css'

function App() {
    return (
        <Router>
            <div className="container">
                <Nav />
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
                        element={<Exemples />}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
