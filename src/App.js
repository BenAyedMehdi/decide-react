
import './App.css'; 
import Banner from './components/Banner';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import TakeDecision from './pages/takeDecision';
import Home from './pages/home';
import Exemples from './pages/exemples';
import About from './pages/about';
import SiteUnderConstruction from './pages/SiteUnderConstruction';


function App() {
  return (
    <Router>
      <div className='container'>
        <Routes> 
          <Route path='/' element={<SiteUnderConstruction/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/take-decision' element={<TakeDecision/>} />
          <Route path='/exemples' element={<Exemples/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
