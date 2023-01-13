import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login() {
  axios.post('http://localhost:3636/login', {username, password})
  .then(({ data }) => {
    if (data.message === true) {
      navigate("/blog");
    } else {
      alert(data.message);
    }
})
  }

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={() => login()}>Login</button>
    </div>
  );
}

export default Login;
