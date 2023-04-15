import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./About";
import Signup from "./Signup";
import Login from "./Login";
import Blog from "./Blog";
import Create from "./CreateArticle";
import Article from "./Article";
import Edit from "./Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blog/:id" element={<Article />} />
            <Route path="/update/:id" element={<Edit />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
