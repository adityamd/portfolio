import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/common/Header';
import Home from './components/home/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Testimonials from './components/pages/Testimonials';
import Blog from './components/pages/Blog';
import { Contact } from './components/pages/Contact';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
