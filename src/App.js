// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route}
     from 'react-router-dom';
import Home from './pages';
import Services from "./pages/services";
// import ourServices from "./pages/ourServices";
// import ourServices from "./pages/ourServices";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
// import Services from "./pages/services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path="/index" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/services" element={<ourServices/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;