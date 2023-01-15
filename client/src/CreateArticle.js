import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();

  function save() {
    axios
      .post("http://localhost:3636/articles/" , { title, description, text} )
      .then(({ data }) => {
       
      });
      navigate("/blog")
  }

  return (
    <div>
      <h1>New Article</h1>
      <form>
        <label>
          Title:
          <input onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Article:
          <textarea id="article-text" onChange={(e) => setText(e.target.value)} />
        </label>
        <button id="create" onClick={() => {
                save();
              }}>
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
