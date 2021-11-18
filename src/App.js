import './App.css';
import Home from './Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Services from './Services';
import Skills from './Skills';
import Testimonial from './Testimonial';
import Contact from './Contact';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollPosition from '@react-hook/window-scroll';
import { useEffect, useState } from 'react';
function App() {
  const scrollY = useScrollPosition(60 /*fps*/);
  console.log('window.scrollY', window.scrollY);

  const [scrollState, setScrollState] = useState(0);
  useEffect(() => {
    
    if (window.scrollY > 301) {
      setScrollState(window.scrollY);
    } else {
      setScrollState(0);
    }
  }, [window.scrollY > 400 && window.scrollY < 410]);

  useEffect(() => {
    if (window.scrollY > 301) {
      setScrollState(window.scrollY);
    } else {
      setScrollState(0);
    }
  }, [window.scrollY < 400]);

  return (
    <div className="App">
      <Header />
      <Home />
      <Services />

      <Skills />
      <Testimonial />
      <Contact />
      <a
        className="return_to_top"
        href="#home"
        style={scrollState > 400 ? { display: 'block' } : { display: 'none' }}
      >
        <KeyboardArrowUpIcon className="return_button" />
      </a>
    </div>
  );
}

export default App;