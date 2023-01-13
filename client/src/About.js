
import { useNavigate } from "react-router-dom";
const image = require("./media/retrosupply.jpg");
import('./About.css')

function About() {
  const navigate = useNavigate();

  return ( <div class="container">     
        <h2>Creating beautiful blogposts</h2>
        <h3>is made fun and easy with</h3>
        <h1>Bloggy</h1>
        <div>
          <button onClick={() => {
          navigate("/signup");
          }}>Sign Up</button>
          <button onClick={() => {
          navigate("/login");
          }}>Login</button>
        </div>
  </div> );
}

export default About;