import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Routes,
  useNavigate, 
} from "react-router-dom";
import axios from "axios";
import { useState, useEffect  } from 'react';
import About from './About';
import Signup from './Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
          <Route path="/" element={ <About/> } />
          <Route path="/signup" element={ <Signup/> } />
          <Route path="/login" element={ <h1>Login</h1> } />
          <Route path="/profile" element={ <h1>Blog</h1> } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;