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
import Login from './Login';
import Blog from './Blog';
import Create from './CreateArticle'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
          <Route path="/" element={ <About/> } />
          <Route path="/signup" element={ <Signup/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/blog" element={ <Blog/>} />
          <Route path="/create" element={ <Create/>} />

       

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
