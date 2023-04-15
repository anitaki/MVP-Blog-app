import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function signup() {
  axios.post('http://localhost:3636/signup', {username, password})
  .then(({ data }) => {
    if (data.message === true) {
      navigate("/login");
    } else {
      alert(data.message);
    }
})
  }

  return (
    <div>
      <h1>Signup</h1>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="button-container">
        <button onClick={() => signup()}>Sign Up</button>
        <button className="cancel" onClick={() => navigate("/")}>Cancel</button>
      </div>

    </div>
  );
}

export default Signup;
