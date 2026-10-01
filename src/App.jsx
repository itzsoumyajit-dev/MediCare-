import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VideoConsult from './pages/VideoConsult';
import Medicines from './pages/Medicines';
import LabTests from './pages/LabTests';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video-consult" element={<VideoConsult />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/lab-tests" element={<LabTests />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
