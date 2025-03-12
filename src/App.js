import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import './App.css';


import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Blog from './pages/Blog';
import FullBlog from './pages/FullBlog';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/fullblog/:id" element={<FullBlog />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


