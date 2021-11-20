import './App.css';
import Home from './Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Services from './Services.js';
import Skills from './Skills.js';
import Testimonial from './Testimonial';
import Contact from './Contact.js';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollPosition from '@react-hook/window-scroll';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const scrollY = useScrollPosition(60 /*fps*/);
  console.log('window.scrollY',scrollY);

  const [scrollState, setScrollState] = useState(0);
  useEffect(() => {
    if (scrollY > 400) {
      setScrollState(scrollY);
    } else {
      setScrollState(0);
    }
  }, [scrollY]);

  return (
    <div className="App">
      <Header />
      <Home />
      <ToastContainer position="top-center" className="toaster_message"/>
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
