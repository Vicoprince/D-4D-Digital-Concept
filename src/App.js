import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './Pages/About';
import Services from './Pages/Services';
import WhyUs from './Pages/WhyUs';
import Contact from './Pages/Contact';
// import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      {/* <ToastContainer></ToastContainer> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/our-services" element={<Services />}></Route>
          <Route path="/why-us" element={<WhyUs />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
