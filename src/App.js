import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
           <h1 className="my-profile-heading">My Profile</h1>
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/AboutPage">About</Link></li>
            <li><Link to="/SkillsPage">Skills</Link></li>
            <li><Link to="/ContactPage">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/SkillsPage" element={<SkillsPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
